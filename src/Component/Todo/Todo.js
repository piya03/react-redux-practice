import React, { useState } from "react";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";

import { add_todo, delete_todo } from "../../Actions";

const Todo = () => {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.todoReduce);
  console.log("Todo -> dispatch", dispatch);
  console.log("Todo -> todoState", todoState);
  const [inputVal, setInputVal] = useState("");
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
            dispatch(add_todo(inputVal));
            setInputVal("");
          }}
        >
          ADD
        </button>
      </form>

      <List />
    </div>
  );
};

export default Todo;
