import Home from "./components/home/Home";
import Product from "./components/Product/Product";
import Services from "./components/services/Services";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4">
        <header className="py-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 text-center">
            Welcome to Sebiro Technologies
          </h1>
        </header>

        <main className="space-y-10">
          <Home />
          <Product />
          <Services />
        </main>
      </div>
    </>
      
  );
}
