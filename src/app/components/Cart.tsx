import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../../features/cartSlice";

export default function Cart() {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  let subtotal = 0;
  let savings = 0;

  let soupQty = 0;
  let breadQty = 0;

  cart.forEach((item: any) => {
    if (item.name === "Soup") soupQty = item.quantity;
    if (item.name === "Bread") breadQty = item.quantity;
  });

  return (
    <div className="p-3 sm:p-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4">Basket</h2>

      {cart.length === 0 && (
        <p className="text-gray-500 text-sm">No items added</p>
      )}

      <div className="space-y-4">
        {cart.map((item: any) => {
          const itemTotal = item.price * item.quantity;
          subtotal += itemTotal;

          let itemSaving = 0;

          // Cheese
          if (item.name === "Cheese") {
            const free = Math.floor(item.quantity / 2);
            itemSaving = free * item.price;
          }

          // Soup + Bread
          if (item.name === "Bread") {
            const applicable = Math.min(soupQty, breadQty);
            itemSaving = applicable * (item.price / 2);
          }

          // Butter
          if (item.name === "Butter") {
            itemSaving = (item.price / 3) * item.quantity;
          }

          savings += itemSaving;

          return (
            <div
              key={item.id}
              className="border rounded-lg p-3 shadow-sm"
            >
              {/* Top row */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-base sm:text-lg">
                  {item.name}
                </span>

                <span className="text-gray-600 text-sm sm:text-base">
                  £ {item.price.toFixed(2)}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="border px-2 py-1 rounded text-sm"
                  onClick={() => dispatch(decreaseQty(item.id))}
                >
                  -
                </button>

                <span className="text-sm sm:text-base">
                  {item.quantity}
                </span>

                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                  onClick={() => dispatch(increaseQty(item.id))}
                >
                  +
                </button>
              </div>

              {/* Price */}
              <p className="text-gray-500 text-xs sm:text-sm mt-2">
                £{item.price.toFixed(2)} × {item.quantity} = £
                {itemTotal.toFixed(2)}
              </p>

              {/* Savings */}
              {itemSaving > 0 && (
                <p className="text-red-500 text-xs sm:text-sm">
                  Savings £{itemSaving.toFixed(2)}
                </p>
              )}

              {/* Final cost */}
              <p className="font-semibold mt-1 text-sm sm:text-base">
                Item cost £{(itemTotal - itemSaving).toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>

      {/* FINAL BILL */}
      <hr className="my-4" />

      <div className="space-y-2 text-sm sm:text-base">
        <div className="flex justify-between">
          <span>Sub Total:</span>
          <span>£ {subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-red-500">
          <span>Savings:</span>
          <span>£ {savings.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold text-base sm:text-lg">
          <span>Total Amount:</span>
          <span>£ {(subtotal - savings).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}