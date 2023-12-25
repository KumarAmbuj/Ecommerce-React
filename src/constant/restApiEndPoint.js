export const GET_PRODUCT_LIST = "https://dummyjson.com/products";
export const SEARCH_PRODUCT_LIST = (value) => {
  return `https://dummyjson.com/products/search?q=${value}`;
};

export const SEARCH_CATEGORY_LIST = (value) => {
  return `https://dummyjson.com/products/category/${value}`;
};
export const GET_CATEGORY_LIST = "https://dummyjson.com/products/categories";
