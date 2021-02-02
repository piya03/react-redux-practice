const initialState = {
  data: [],
};
const todoReduce = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [
          ...state.data,
          {
            message: action.message,
            id: action.id,
          },
        ],
      };
    case "DELETE_TODO":
      const todos = state.data.filter((each) => each.id !== action.id);
      return {
        ...state,
        data: todos,
      };
    case "EDIT-TODO":
      const { id, message } = action;
      const updateItemIndex = state.data.findIndex((each) => each.id === id);

      const newData = [...state.data];
      if (updateItemIndex !== -1) {
        newData[updateItemIndex].message = message;
      }

      return {
        ...state,
        data: newData,
      };

    default:
      return state;
  }
};

export default todoReduce;
