import { waitUntil } from '@vercel/functions';
import {NextResponse} from "next/server";
import {reader} from "../../reader";

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 30;

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

        const itemsPromise = Promise.all(
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

        // Use waitUntil to keep the function alive while processing
        waitUntil(itemsPromise);

        const items = await itemsPromise;
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