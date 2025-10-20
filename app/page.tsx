import Home from "./components/home/Home";
import Product from "./components/Product/Product";
import Services from "./components/services/Services";

export default function HomePage() {
  return (
    <>
    <div className="mx-auto px-2 w-full mb-2">
      <div className="font-bold text-3xl">
        Welcome to Sebiro Technologies
      </div>
      <Home />
      <Product/>
      <Services/>
      </div>
    </>
      
  );
}
