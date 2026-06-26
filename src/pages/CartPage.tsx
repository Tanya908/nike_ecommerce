import {useCart} from "../context/CartContext.tsx";
import CartItem from "../components/Cart/CartItem.tsx";
import CartSummary from "../components/Cart/CartSummary.tsx";


const CartPage = () => {
    const { cartItems } = useCart();

    return (
        <section className="page-spacing py-12">
            <h1 className="mb-10 text-h1">
                Shopping Cart
            </h1>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <CartItem
                                key={`${item.productId}-${item.size}`}
                                item={item}
                            />
                        ))}
                    </div>

                    <CartSummary />
                </div>
            )}
        </section>
    );
};

export default CartPage;