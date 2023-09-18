const cartInitState = {
  count: 0,
};

export const cartReducer = (state = cartInitState, action) => {
  const { type } = action;
  switch (type) {
    case "AddToCart":
      return {
        ...state,
        count: state.count + 1,
      };
    case "removeFromCart":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export const add = () => {
  return {
    type: "AddToCart",
    // payload: product,
  };
};

export const remove = () => {
  return {
    type: "removeFromCart",
    // payload: product,
  };
};
