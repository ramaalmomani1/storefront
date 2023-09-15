const CatinitState = {
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

export const catReducer = (state = CatinitState, action) => {
  const { type, paylod } = action;
  switch (type) {
    case "activeCat":
      return;
      default:
        return state
  }
};

export const activeCat = (name) => {
    return {
      type: 'activeCat',
      payload: name
    }
  }