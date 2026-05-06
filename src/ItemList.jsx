import React, { useEffect, useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState(["apple", "banana", "orange"]);

  useEffect(() => {
    console.log("아이템 목록 추가됨.");
  }, [items]);

  const addItem = () => {
    const newItem = prompt("newItem을 입력하세요: ");
    if (newItem) {
      setItems((prevItem) => [...prevItem, newItem]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-10 p-2 bg-amber-400 rounded-2xl">
      <h2 className="font-bold text-3xl"> Items </h2>
      <div className="bg-gray-300 pl-20 pr-20 rounded-[40px] mb-2 mt-4">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <button onClick={addItem} className="border p-2 rounded-2xl">
        Add Item
      </button>
    </div>
  );
};

export default ItemList;
