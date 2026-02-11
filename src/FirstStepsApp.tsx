import { ItemCounter } from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Shopping Cart</h1>
            <ItemCounter productName="Nintendo Switch 2" quantity={10} />
            <ItemCounter productName="PlayStation 5" quantity={5} />
            <ItemCounter productName="Xbox Series X" quantity={3} />
            <ItemCounter productName="PC" quantity={2} />

        </>
    )
}