export interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    description: string;
    categories: {
        title: string;
    }[];
    author: {
        name: string;
        image: string;
        bio: [object];
    };
    mainImage: {
        asset: {
            url: string;
        };
    };
    body: [object];
    likeCount: number;
    readCount: number;
}

export interface Category {
    title: string;
    image: string;
    description: string;
}

export interface Condition {
    title: string;
    image: string;
    description: string;
}

export interface HorzInfo {
    slug?: {
        current: string;
    };
    title: string;
    image?: string;
    mainImage?: string;
    description: string;
}

export interface MagInfo {
    slug?: {
        current: string;
    };
    title: string;
    image?: string;
}

export interface Product {
    title: string;
    image: string;
    description: string;
}

export interface Author {
    name: string;
    image: string;
    bio: [object];
}
