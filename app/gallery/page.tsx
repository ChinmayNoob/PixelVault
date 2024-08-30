import React from 'react'
import cloudinary from 'cloudinary'
import ImageUploadButton from '@/components/ImageUploadButton';
import GalleryGrid from '@/components/GalleryGrid';
import SearchForm from '@/components/SearchForm';

export type SearchResult = {
    public_id: string,
    tags: string[];
};
export type UploadResult = {
    info: {
        public_id: string;
    };
    event: "success";
};
async function page({
    searchParams: { search },
}: {
    searchParams: {
        search: string,
    }
}) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };


    return (
        <section className='min-h-screen'>
            <div className='flex flex-col gap-8'>
                <div className='flex justify-between'>
                    <h1 className='text-4xl font-bold'>Gallery</h1>
                    <ImageUploadButton />
                </div>
                <GalleryGrid images={results.resources} />

            </div>
        </section>

    )
}

export default page