export interface Post {
    _id: string;
    publishedAt?: string;
    title: string;
    author?: {
        name: string;
        image: string;
    };
    description?: string;
    mainImage: {
        asset: {
            url?: string;
        };
    };
    slug: {
        current: string;
    };
    body?: [object];
    likeCount?: number;
    readCount?: number;
}

export interface Category {
    title: string;
    image: string;
    description: string;
}