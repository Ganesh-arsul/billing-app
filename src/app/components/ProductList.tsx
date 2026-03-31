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
    <div>
      <h2 className="text-xl font-bold mb-4 border-b pb-2">Products</h2>

      {products.map((p) => {
        
        const isAdded = cart.some((item: any) => item.id === p.id);

        return (
          <div
            key={p.id}
            className="flex justify-between items-center py-3 border-b"
          >
            <span className="font-medium">{p.name}</span>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                £ {p.price.toFixed(2)}
              </span>

              <button
                disabled={isAdded}
                className={`px-3 py-1 rounded text-white ${
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