import {
    createContext,
    useContext,
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

    clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

type CartProviderProps = {
    children: ReactNode;
};

export const CartProvider = ({
                                 children,
                             }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const addToCart = (productId: string, size: string) => {
        console.log(productId, size);

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

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
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