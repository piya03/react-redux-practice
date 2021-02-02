import React, { useState } from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";

import { add_todo, delete_todo } from "../../Actions";

const Todo = () => {
  const dispatch = useDispatch();
  const todoStateData = useSelector((state) => state.todoReduce.data);

  const todoState = useSelector((state) => state.todoReduce);
  const [inputVal, setInputVal] = useState("");
  console.log("Todo -> inputVal", inputVal);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>todo</div>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button
          onClick={() => {
            if (inputVal !== "") {
              dispatch(add_todo(inputVal));
            }
            setInputVal("");
          }}
        >
          ADD
        </button>
      </form>

      {todoStateData &&
        todoStateData.map((each, i) => {
          return <List key={each.id} each={each} />;
        })}
    </div>
  );
};

export default Todo;
