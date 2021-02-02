export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = () => {
  return {
    type: "SIGN_IN",
  };
};
export const add_todo = (msg) => {
  return {
    type: "ADD_TODO",
    message: msg,
    id: Math.random(),
  };
};

export const delete_todo = (id) => {
  return {
    type: "DELETE_TODO",
    id: id,
  };
};

export const edit_todo = (id, msg) => {
  return {
    type: "EDIT-TODO",
    message: msg,
    id: id,
  };
};
