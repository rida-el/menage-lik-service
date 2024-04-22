/*

	For global state, we will be using the Recoil.js library

	This file will include all the atoms (global states) that
	we will used in our application

*/

import { atom } from "recoil";

// windowState will keep track of the current window size (width and height)
// and the scroll position. Whenever these properties are needed in the app,
// we will use this atom to access them.
export const windowState = atom({
  key: "windowState",
  default: {
    width: 0,
    height: 0,
    scroll: 0,
  },
});

export const menuState = atom({
  key: "menuState",
  default: false,
});
