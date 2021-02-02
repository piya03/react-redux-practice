import React, { useState } from "react";
import "../../App.css";

import { useDispatch, useSelector } from "react-redux";
import { delete_todo, edit_todo } from "../../Actions";

const List = ({ each }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [editVal, setEditVal] = useState(each.message);
  console.log("List -> editVal", editVal);
  console.log("List -> edit", edit);
  return (
    <div>
      <div className="list_container">
        <>
          {!edit ? (
            <div>{each.message}</div>
          ) : (
            <div>
              <input
                type="text"
                value={editVal}
                onChange={(e) => setEditVal(e.target.value)}
              />{" "}
            </div>
          )}
          <button
            onClick={() => {
              dispatch(delete_todo(each.id));
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              // if (edit) {
              setEditVal(each.message);
              // }
              setEdit(!edit);
              console.log("edit_todo");
              dispatch(edit_todo(each.id, editVal));
            }}
          >
            {!edit ? "edit" : "update"}
          </button>
        </>
      </div>
    </div>
  );
};

export default List;
