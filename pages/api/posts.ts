// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";

type Data = {
    name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    let posts = await sanityClient.fetch(`(*[_type == "post"] | order(publishedAt desc))[10..19] {
        _id,
        title,
        slug,
        publishedAt,
        description,
        author -> {
            name,
            image
        },
        mainImage,
        likeCount,
        readCount
    }`);
    
    res.status(200).json(posts)
}
