import {NextResponse} from "next/server";
import {reader} from "../../reader";

export const dynamic = 'force-dynamic'

export async function GET(request: Request, {params}) {
    try {
        console.log('Vercel Request Received - Params:', params);

        const { collectionName } = params;
        console.log('Collection Name:', collectionName);

        // Log available collections
        console.log('Available Collections:', Object.keys(reader.collections));

        // Check if the collection exists
        if (!reader.collections[collectionName]) {
            console.error(`Collection ${collectionName} not found`);
            return NextResponse.json(
                { error: `Collection ${collectionName} not found` },
                { status: 404 }
            );
        }

        // Log before list operation
        console.log('Attempting to list slugs');
        const slugs = await reader.collections[collectionName].list()
        console.log('Slugs found:', slugs);

        // Detailed logging for each slug
        const items = await Promise.all(
            slugs.map(async (slug) => {
                console.log(`Processing slug: ${slug}`);
                try {
                    const item = await reader.collections[collectionName].read(slug)
                    console.log(`Item read for slug ${slug}:`, item);

                    const content = await item.content()
                    console.log(`Content retrieved for slug ${slug}`, content ? 'Content exists' : 'No content');

                    return {...item, content}
                } catch (itemError) {
                    console.error(`Error processing slug ${slug}:`, itemError);
                    return null;
                }
            })
        )

        // Filter out any null items
        const filteredItems = items.filter(item => item !== null);

        console.log('Final Items:', filteredItems);

        return NextResponse.json(filteredItems)
    } catch (error) {
        console.error('Critical Error:', error);
        return NextResponse.json(
            {
                error: error.message,
                stack: error.stack
            },
            { status: 500 }
        );
    }
}