// import {IProduct} from "../types/productTypes";

import {IProduct} from "src/api/types";

export const priceFormat = (number: number | string, thousandsSeparator: string = ' ') => (
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator)
);

export const generateRandomProducts = (numberOfNewProducts: number): IProduct[] => {
    const name = ['Телефон', 'Ноутбук', 'Телевизор', 'Холодильник'];
    const images = ['/images/phone.jpg', '/images/laptop.jpg', '/images/tv.jpg', '/images/fridge.jpg'];
    const description = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.';
    const products = [];

    for (let i = 0; i < numberOfNewProducts; i++) {
        const nameIndex = Math.floor(Math.random() * name.length);

        products.push({
            id: Math.floor(Math.random() * 100000).toString(),//Math.floor(Math.random() * 100).toString() + nameIndex,
            name: `${name[nameIndex]} ${Math.floor(Math.random() * 1000)}`,
            price: Math.floor(Math.random() * 100000),
            desc: description,
            photo: images[nameIndex],
            createdAt: null,
            updatedAt: null,
            category: null
        });
    }

    return products;
}

export const truncateText = (text: string, maxLength: number = 300): string => {
    if (!text) return text;
    if (text.length <= maxLength) {
        return text;
    } else {
        const truncated = text.slice(0, maxLength);
        return truncated.slice(0, Math.min(truncated.length, truncated.lastIndexOf(' '))) + '...';
    }
}