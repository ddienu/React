import { createSlice } from '@reduxjs/toolkit';

const users = [
  {
    "_id": "65d2e5fb5a70505fa529ac1d",
    "id" : "102393",
    "name" : "Timo",
    "lastname" : "Boll",
    "email" : "timo@test.com",
    "password" : "$2b$10$U9VV5YNMR9SmoXemnJLgxu0joYTc8uPmW5S0PcYBP0GjVhD8UKPje",
    "avatar" : "https://butterflyonline.com/wp-content/uploads/2015/01/bollwc1.jpg"
  },
];

export const userSlice = createSlice({
    name : 'users',
    initialState : users,
    reducers : {
        addUser : (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
