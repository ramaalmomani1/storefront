const proInitState = {
  products: [
    {
      category: "Food",
      image:
        "https://www.itisakeeper.com/wp-content/uploads/2020/08/Easy-Alfredo-Sauce-HERO-1-400x400.jpg",
      name: "Fettuccine Alfredo",
      description:
        "A creamy Italian pasta dish with fresh fettuccine, butter, and Parmesan cheese.",
      price: "$10",
      inStock: "234",
    },
    {
      category: "Food",
      image:
        "https://th.bing.com/th/id/R.e77ba2518e762c8c97334f82c2a58595?rik=4%2bpNv6PKJtx0Uw&pid=ImgRaw&r=0",
      name: "Steamed Cheeseburger",
      description:
        "Steamed ground beef then topped with melted cheese (usually cheddar). You can add condiments, tomatoes, and lettuce for extra flavor. ",
      price: "$5",
      inStock: "300",
    },
    {
      category: "Food",
      image:
        "https://th.bing.com/th/id/OIP.CjPZRPbHdRm-buvnVlXq_QHaLH?pid=ImgDet&rs=1",
      name: "Pizza",
      description:
        " A flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients.",
      price: "$7",
      inStock: "105",
    },
    ///////////////////////
    {
      category: "Electronics",
      image:
        "https://th.bing.com/th/id/OIP.jpY3GqAUZ1QV-5300tCuqQAAAA?pid=ImgDet&rs=1",
      name: "Laptop",
      description: "A small, portable personal computer",
      price: "$550",
      inStock: "275",
    },
    {
      category: "Electronics",
      image:
        "https://images.fonearena.com/blog/wp-content/uploads/2017/05/Samsung-QLED-TV.jpg",
      name: "TV",
      description:
        "A telecommunication medium for transmitting moving images and sound",
      price: "$899",
      inStock: "460",
    },
    {
      category: "Electronics",
      image:
        "https://th.bing.com/th/id/OIP.JEV_U7QBCrdvAyznN1cs5wHaEc?pid=ImgDet&rs=1",
      name: "iPhone",
      description: "iPhone",
      price: "$899",
      inStock: "788",
    },
  ],
  finalProducts: [],
};

export const proReducer = (state = proInitState, action) => {
  let { type, paylod } = action;
  let selectedPro = [];
  switch (type) {
    case "productsList ":
      state.products.filter((pro) => pro.category === paylod);
      return {
        ...state,
        finalProducts: selectedPro,
      };
    default:
      return state;
  }
};

export const selectedPro = (name) => {
  return {
    type: "productsList",
    payload: name,
  };
};
