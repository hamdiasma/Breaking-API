import React, { Fragment } from "react";
import Loading from "../ui/Loading";
import CaracterItem from "./CaracterItem";

const CaracterGrid = ({ items, isLoading }) => {
  return <Fragment>{ isLoading ? <Loading /> : <section className="cards">
      
      {items.map(item=>(
          <CaracterItem key={item.char_id} item={item}/>
      ))}
      
      </section>}</Fragment>;
};

export default CaracterGrid;
