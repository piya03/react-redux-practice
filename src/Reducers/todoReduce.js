const initialState = {
  data: [],
};
const todoReduce = (state = initialState, action) => {
  console.log("todoReduce -> action", action);
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            payload: action.payload,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      return {};
    default:
      return state;
  }
};

export default todoReduce;
