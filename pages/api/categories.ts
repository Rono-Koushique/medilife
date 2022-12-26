import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const categoryQuery = `*[_type == "category"] {
        title,
        image,
        description
    }`;

    // returns object
    let categories = await sanityClient.fetch(categoryQuery);

    // returns json
    res.status(200).json({
        status:"success",
        categories: categories
    });
}
