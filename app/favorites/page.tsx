import FavoritesList from '@/components/FavoritesList'
import { ForceRefresh } from '@/components/ForceRefresh'
import React from 'react'
import { SearchResult } from '../gallery/page';
import cloudinary from "cloudinary";


async function page() {

    const results = (await cloudinary.v2.search
        .expression("resource_type:image AND tags=favorite")
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };
    return (
        <section className='min-h-screen'>

            <ForceRefresh />

            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Favorite Images</h1>
                </div>

                <FavoritesList initialResources={results.resources} />
            </div>

        </section>
    )
}

export default page