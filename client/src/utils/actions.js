export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";


// original state
const state = {
  name: 'Lernantino',
  email: 'lernantino@gmail.com' 
};

// create a new version of state by making a copy of the original state's data and updating only the part that has changed
const updatedState = {...state, email: 'lernantino99@gmail.com'};