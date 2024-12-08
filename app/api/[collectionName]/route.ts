import {NextResponse} from "next/server";
import {reader} from "../../reader";

export async function GET(request: Request, {params}) {
    try {
        const { collectionName } = params;

        const slugs = await reader.collections[collectionName].list()

        // Use Promise.all to handle concurrent async operations
        const items = await Promise.all(
            slugs.map(async (slug: string) => {
                const item = await reader.collections[collectionName].read(slug)
                const content = await item.content()
                return {...item, content}
            })
        )

        return NextResponse.json(items)
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}