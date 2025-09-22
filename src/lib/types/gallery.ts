export interface GalleryImage {
    src: string;
    alt: string;
    title?: string;
    description?: string;
    category?: string;
}

export interface GalleryCategory {
    id: string;
    name: string;
    description?: string;
}