export interface Regions {
    id: string;
    name: string;
    properties: number;
    images: string[];
}

export interface TopVillas {
    id: string;
    name: string;
    images: string[];
    price: number;
    address: string;
    location: string;
    guests: number;
    bedrooms: number;
    size: number;
    baths: number;
}