import {NextResponse} from "next/server";
import {reader} from "../../../reader";

export async function GET(request: Request, {params}) {
    try {
        const {collectionName, slug} = params;
        console.log(collectionName, slug)

        const item = await reader.collections[collectionName].read(slug)
        console.log(item)

        const content = await item.content()
        console.log(content)

        return NextResponse.json({...item, content})
    } catch (error) {
        throw error
        // return NextResponse.json(
        //     {error},
        //     {status: 500}
        // );
    }
}
