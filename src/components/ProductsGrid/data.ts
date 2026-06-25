import type { CardProps } from "../ShoeCard";

import Shoe12 from "../../assets/shoes/shoe-12.webp";
import Shoe7 from "../../assets/shoes/shoe-7.webp";
import Shoe2 from "../../assets/shoes/shoe-2.webp";
import Shoe1 from "../../assets/shoes/shoe-1.webp";
import Shoe15 from "../../assets/shoes/shoe-15.webp";
import Shoe9 from "../../assets/shoes/shoe-9.webp";

export const products: CardProps[] = [
    {
        title: "Nike Air Force 1 Mid '07",
        meta: "6 Colour",
        price: 98.3,
        imageSrc: Shoe12,
        badge: {
            label: "Best Seller",
            tone: "red",
        },
        to: "/",
    },
    {
        title: "Nike Court Vision Low",
        meta: "4 Colour",
        price: 56,
        imageSrc: Shoe7,
        badge: {
            label: "Extra 20% Off",
            tone: "green",
        },
        to: "/",
    },
    {
        title: "Nike Court Vision Low",
        meta: "4 Colour",
        price: 98.3,
        imageSrc: Shoe2,
        badge: {
            label: "Extra 20% Off",
            tone: "green",
        },
        to: "/",
    },
    {
        title: "Nike Court Vision Low",
        meta: "4 Colour",
        price: 98.3,
        imageSrc: Shoe1,
        badge: {
            label: "Extra 20% Off",
            tone: "green",
        },
        to: "/",
    },{
        title: "Nike Court Vision Low",
        meta: "4 Colour",
        price: 98.3,
        imageSrc: Shoe15,
        badge: {
            label: "Extra 20% Off",
            tone: "green",
        },
        to: "/",
    },{
        title: "Nike Court Vision Low",
        meta: "4 Colour",
        price: 98.3,
        imageSrc: Shoe9,
        badge: {
            label: "Extra 20% Off",
            tone: "green",
        },
        to: "/",
    },
];