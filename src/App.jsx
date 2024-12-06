import React, { useRef } from "react";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import Footer from "./pages/Footer";

function App() {
  const categoriesRef = useRef(null);

  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Landing scrollToCategories={scrollToCategories} />
      <div ref={categoriesRef}>
        <Categories />
      </div>
      <Footer />
    </div>
  );
}

export default App;
