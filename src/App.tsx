import Contact from "./components/Contact";
import HomePage from "./components/Home Page";
import Pricing from "./components/Pricing";
import Product from "./components/Product";
import "./styles/global.scss";

function App() {
  return (
    <main>
      <section>
        <HomePage />
        <Pricing />
        <Product />
        <Contact />
      </section>
    </main>
  );
}

export default App;
