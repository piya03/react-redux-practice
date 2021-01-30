import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, login } from "../Actions";

const Count = () => {
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  console.log("Count -> dispatch", dispatch);
  console.log("Count -> isLogged", isLogged);
  console.log("Count -> counter", counter);
  return (
    <div>
      {isLogged && (
        <>
          <p>Counter {counter} </p>
          <button
            onClick={() => {
              dispatch(increment(5));
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              if (counter > 0) {
                dispatch(decrement());
              }
            }}
          >
            -
          </button>
        </>
      )}
      <br />
      {!isLogged && (
        <button
          onClick={() => {
            dispatch(login());
          }}
          style={{
            cursor: "pointer",
          }}
        >
          LOG IN
        </button>
      )}
      {isLogged ? <h2>You are logged In</h2> : <h2>Please logged In</h2>}
    </div>
  );
};

export default Count;
