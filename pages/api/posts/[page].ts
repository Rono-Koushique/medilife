import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../../sanity";

export async function getSortedPostsData() {
    let postQuery = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        publishedAt,
        title,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        slug,
        likeCount,
        readCount
    }`;
    let posts = await sanityClient.fetch(postQuery);
    return posts
}

export default async function (req: NextApiRequest, res: NextApiResponse) {
    let { page } = Array.isArray(req.query) ? req.query[0] : req.query
    page = parseInt(page);
    const allPostsData = await getSortedPostsData();
    const perPage = 10;
    const totalPosts = allPostsData.length;
    const totalPages = totalPosts / perPage;
    const start = (page - 1) * perPage;
    let end = start + perPage;

    if (end > totalPosts) {
        end = totalPosts;
    }

    res.status(200).json({
        currentPage: page,
        perPage: perPage,
        totalCount: totalPosts,
        pageCount: totalPages,
        start: start,
        end: end,
        posts: allPostsData.slice(start, end)
    });
}
