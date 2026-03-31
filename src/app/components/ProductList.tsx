import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../features/cartSlice";

const products = [
  { id: 1, name: "Bread", price: 1.1 },
  { id: 2, name: "Milk", price: 0.5 },
  { id: 3, name: "Cheese", price: 0.9 },
  { id: 4, name: "Soup", price: 0.6 },
  { id: 5, name: "Butter", price: 1.2 },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  return (
    <div className="p-3 sm:p-4">
      <h2 className="text-lg sm:text-xl font-bold mb-4 border-b pb-2">
        Products
      </h2>

      {products.map((p) => {
        const isAdded = cart.some((item: any) => item.id === p.id);

        return (
          <div
            key={p.id}
            className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-3 border-b"
          >
            {/* Product Name */}
            <span className="font-medium text-base sm:text-lg">
              {p.name}
            </span>

            {/* Price + Button */}
            <div className="flex justify-between sm:justify-end items-center gap-3">
              <span className="text-gray-600 text-sm sm:text-base">
                £ {p.price.toFixed(2)}
              </span>

              <button
                disabled={isAdded}
                className={`px-3 py-1 text-sm sm:text-base rounded text-white transition ${
                  isAdded
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-500 hover:bg-blue-600"
                }`}
                onClick={() => dispatch(addItem(p))}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}