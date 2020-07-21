import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CaracterGrid from "./components/caracters/CaracterGrid";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      const result = await response.data;
      setItems(result);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="container">
      <Header />
      <CaracterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
