import Cart from "./app/components/Cart";
import ProductList from "./app/components/ProductList";

function App() {
  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-start py-6 px-2">
      
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-4">
        
        {/* Products */}
        <div className="w-full md:w-1/2 bg-white p-4 sm:p-5 rounded-xl shadow-md">
          <ProductList />
        </div>

        {/* Cart */}
        <div className="w-full md:w-1/2 bg-white p-4 sm:p-5 rounded-xl shadow-md">
          <Cart />
        </div>

      </div>

    </div>
  );
}

export default App;