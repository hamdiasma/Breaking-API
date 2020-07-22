import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CaracterGrid from "./components/caracters/CaracterGrid";
import "./App.css";
import Pagination from "./components/pagination/Pagination";
import SepItemPage from "./components/pagination/SepItemPage";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [setPerItems, setSetPerItems] = useState(8);
  const [query, setQuery] = useState("");


  useEffect(() => {
    setTimeout(() => {
      const fetchItems = async () => {
        const response = await axios.get(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );
        const result = await response.data;
        setItems(result);
        setIsLoading(false);
      };
      fetchItems();
    }, 2000);
  }, [query]);
  const indexOfLastPage = currentPage * setPerItems;
  const indexOfFirsPage = indexOfLastPage - setPerItems;
  const currentPostsPage = items.slice(indexOfFirsPage, indexOfLastPage);
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <Header />
      <div className="pagin-body">
        <Pagination
          totalItems={items.length}
          setPerItems={setPerItems}
          goToPage={goToPage}
        />
        <Search isLoading={isLoading} items={items} getQuery={(q)=>setQuery(q)}/>
        <SepItemPage setSetPerItems={setSetPerItems} />
      </div>
      <CaracterGrid items={currentPostsPage} isLoading={isLoading} />
    </div>
  );
};

export default App;
