import Cart from "./app/components/Cart";
import ProductList from "./app/components/ProductList";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "30px",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh"
    }}>
      <div style={{
        width: "40%",
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <ProductList />
      </div>

      <div style={{
        width: "40%",
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <Cart />
      </div>
    </div>
  );
}

export default App;