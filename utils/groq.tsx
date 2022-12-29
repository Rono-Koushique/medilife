import { sanityClient } from "../sanity";

export async function getRangedPosts(start: number, end: number) {
    let posts =
        await sanityClient.fetch(`(*[_type == "post"] | order(publishedAt desc))[${start.toString()}..${end.toString()}] {
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
    return posts;
}

export async function getAllCategories() {
    let categories = await sanityClient.fetch(`*[_type == "category"] {
        title,
        image,
        description
    }`);
    return categories;
}

export async function getTopPosts(count:number) {
    const topPosts =
        await sanityClient.fetch(`(*[_type == "post"] | order(readCount desc))[0..${count.toString()}] {
        _id,
        title,
        mainImage,
        slug,
    }`);
    return topPosts;
}