import "./App.css";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <Header />
      <Categories/>
      <Products />
      <Footer />
    </>
  );
}

export default App;
