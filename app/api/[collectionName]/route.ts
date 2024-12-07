import {NextResponse} from "next/server";
import {reader} from "../../reader";

export async function GET(request: Request, {params}) {
    try {
        const { collectionName } = params;
        const slugs = await reader.collections[collectionName].list()

        let items = []

        for (const slug of slugs) {
            const item = await reader.collections[collectionName].read(slug)
            const content = await item.content()

            items.push({...item, content})
        }

        // const url = new URL(request.url);
        // const queryParams = Object.fromEntries(url.searchParams.entries());

        return NextResponse.json(items)
    } catch (error) {
        return NextResponse.json(
            error,
            {status: 500}
        );
    }
}
