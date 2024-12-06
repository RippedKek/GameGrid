import React, { useState, useRef } from "react";
import Landing from "./pages/Landing";
import Categories from "./pages/Categories";
import Footer from "./pages/Footer";
import CategoryGames from "./pages/CategoryGames";

function App() {
  const categoriesRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const scrollToCategories = () => {
    categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Landing scrollToCategories={scrollToCategories} />
      <div ref={categoriesRef}>
        <Categories onCategorySelect={handleCategorySelect} />
      </div>

      {selectedCategory && <CategoryGames category={selectedCategory} />}
      
      <Footer />
    </div>
  );
}

export default App;
