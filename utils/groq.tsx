import { sanityClient } from "../sanity";
import { Slug } from "../typings";

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

export async function getAllConditions() {
    let conditions = await sanityClient.fetch(`*[_type == "condition"] {
        title,
        image,
        description
    }`);
    return conditions;
}

export async function getRangedConditions(count: number) {
    let conditions =
        await sanityClient.fetch(`*[_type == "condition"][0...${count.toString()}] {
        title,
        image,
        description
    }`);
    return conditions;
}

export async function getRangedProducts(count: number) {
    let products =
        await sanityClient.fetch(`*[_type == "product"][0...${count.toString()}] {
        title,
        image,
        description
    }`);
    return products;
}

export async function getTopPosts(count: number) {
    const topPosts =
        await sanityClient.fetch(`(*[_type == "post"] | order(readCount desc))[0..${count.toString()}] {
        _id,
        title,
        mainImage,
        slug,
    }`);
    return topPosts;
}

export async function getCurrentPost(slug?: string) {
    const post = await sanityClient.fetch(
        `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        publishedAt,
        title,
        author -> {
            name,
            image,
            bio
        },
        categories[] -> {
            title      
        },
        'comments': *[
            _type == "comment" && 
            post._ref == ^._id &&
            approved == true
        ],
        description,
        mainImage,
        slug,
        likeCount,
        readCount,
        body
    }`,
        {
            slug,
        }
    );
    return post;
}
