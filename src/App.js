import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CaracterGrid from "./components/caracters/CaracterGrid";
import "./App.css";
import Pagination from "./components/pagination/Pagination";
import SepItemPage from "./components/pagination/SepItemPage";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [setPerItems, setSetPerItems] = useState(8);

  useEffect(() => {
    setTimeout(() => {
      const fetchItems = async () => {
        const response = await axios.get(
          `https://www.breakingbadapi.com/api/characters`
        );
        const result = await response.data;
        setItems(result);
        setIsLoading(false);
      };
      fetchItems();
    }, 2000);
  }, []);
  const indexOfLastPage = currentPage * setPerItems;
  const indexOfFirsPage = indexOfLastPage - setPerItems;
  const currentPostsPage = items.slice(indexOfFirsPage, indexOfLastPage);
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Header />

      <CaracterGrid items={currentPostsPage} isLoading={isLoading} />

      <Pagination
        totalItems={items.length}
        setPerItems={setPerItems}
        goToPage={goToPage}
      />
      <SepItemPage setSetPerItems={setSetPerItems}/>
    </div>
  );
};

export default App;
