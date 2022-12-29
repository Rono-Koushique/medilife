export interface Post {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    publishedAt: string;
    description: string;
    categories: {
        title: string
    }[];
    author: {
        name: string;
        image: string;
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

export interface Product {
    title: string;
    image: string;
    description: string;
}