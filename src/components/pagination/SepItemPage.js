import React from "react";

const SepItemPage = ({setSetPerItems}) => {
    const handelchange=(e)=>{
        setSetPerItems(e.target.value)
    }

    return (
    <select className="custom-select" onChange={handelchange}>
      <option selected defaultValue="8">
        8
      </option>
      <option value="16">16</option>
      <option value="32">32</option>
      <option value="100">100</option>
    </select>
  );
};

export default SepItemPage;
