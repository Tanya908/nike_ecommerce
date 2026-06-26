import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode,
} from "react";

import type { CartItem } from "../types/cart";

type CartContextType = {
    cartItems: CartItem[];

    addToCart: (
        productId: string,
        size: string
    ) => void;

    removeFromCart: (
        productId: string,
        size: string
    ) => void;

    increaseQuantity: (
        productId: string,
        size: string
    ) => void;

    decreaseQuantity: (
        productId: string,
        size: string
    ) => void;

    clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider = ({
                                 children,
                             }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "cart",
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

    const addToCart = (
        productId: string,
        size: string
    ) => {
        setCartItems((prev) => [
            ...prev,
            {
                productId,
                size,
                quantity: 1,
            },
        ]);
    };

    const removeFromCart = (
        productId: string,
        size: string
    ) => {
        setCartItems((prev) =>
            prev.filter(
                (item) =>
                    !(
                        item.productId === productId &&
                        item.size === size
                    )
            )
        );
    };

    const increaseQuantity = (
        productId: string,
        size: string
    ) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.productId === productId &&
                item.size === size
                    ? {
                        ...item,
                        quantity: item.quantity + 1,
                    }
                    : item
            )
        );
    };

    const decreaseQuantity = (
        productId: string,
        size: string
    ) => {
        setCartItems((prev) =>
            prev.flatMap((item) => {
                if (
                    item.productId === productId &&
                    item.size === size
                ) {
                    if (item.quantity === 1) {
                        return [];
                    }

                    return {
                        ...item,
                        quantity: item.quantity - 1,
                    };
                }

                return item;
            })
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(
            "useCart must be used within CartProvider"
        );
    }

    return context;
};