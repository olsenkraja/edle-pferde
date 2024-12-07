import {NextResponse} from "next/server";
import {reader} from "../../../reader";

export async function GET(request: Request, {params}) {
    try {
        const {collectionName, slug} = params;
        const item = await reader.collections[collectionName].read(slug)
        const content = await item.content()

        return NextResponse.json({...item, content})
    } catch (error) {
        return NextResponse.json(
            {error},
            {status: 500}
        );
    }
}
