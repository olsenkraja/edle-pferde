import {NextResponse} from "next/server";
import {reader} from "../../reader";

export const runtime = 'nodejs'; // Explicitly set Node.js runtime
export const dynamic = 'force-dynamic'; // Keep your existing dynamic configuration
export const maxDuration = 30; // Set maximum execution time to 30 seconds

export async function GET(request: Request, {params}) {
    try {
        const { collectionName } = params;

        if (!reader.collections[collectionName]) {
            return NextResponse.json(
                { error: `Collection ${collectionName} not found` },
                { status: 404 }
            );
        }

        const slugs = await reader.collections[collectionName].list()

        const items = await Promise.all(
            slugs.map(async (slug) => {
                try {
                    const item = await reader.collections[collectionName].read(slug)

                    const content = await item.content()

                    return {
                        ...item,
                        content
                    }
                } catch (itemError) {
                    console.error(`Detailed error for slug ${slug}:`, {
                        message: itemError.message,
                        stack: itemError.stack,
                        slug
                    });
                    return null;
                }
            })
        )

        const filteredItems = items.filter(item => item !== null);

        return NextResponse.json(filteredItems)
    } catch (error) {
        console.error('Comprehensive Error Capture:', {
            message: error.message,
            stack: error.stack,
            name: error.name
        });
        return NextResponse.json(
            {
                error: error.message,
                stack: error.stack
            },
            { status: 500 }
        );
    }
}