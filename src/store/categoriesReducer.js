const CatInitState = {
  categories: [
    {
      normalizedName: "Electronics",
      displayName: "ELECTRONICS",
      description:
        "Electronics is both a science and an art, where creativity meets engineering precision",
    },
    {
      normalizedName: "Food",
      displayName: "FOOD",
      description:
        "food is a universal language that transcends borders and connects us all It brings people together at the dining table, sparking conversations, forging bonds, and creating memories",
    },
  ],
  activeCategory: "",
};

// create a reducer

export const catReducer = (state = CatInitState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "activeCat":
      return {
        ...state,
        activeCategory: payload,
      };
    default:
      return state;
  }
};

export const activeCat = (name) => {
  return {
    type: "activeCat",
    payload: name,
  };
};
