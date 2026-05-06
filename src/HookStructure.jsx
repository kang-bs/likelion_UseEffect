import React, { useState, useEffect } from "react";

const HookStructure = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("빈 텍스트");

  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 재 렌더링 됨", count);
  }, [count]);

  useEffect(() => {
    console.log("컴포넌트가 재 렌더링 됨", text);
  }, [text]);

  useEffect(() => {
    console.log("컴포넌트가 매번 렌더링 됨");
  });

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 m-10 rounded-2xl p-10 gap-6">
      <h2 className="text-2xl">Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="border rounded-2xl p-3"
      >
        Increment
      </button>
      <hr className="text-gray-200" />
      <h2 className="text-2xl"> Type text: {text} </h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border"
      />
    </div>
  );
};

export default HookStructure;
