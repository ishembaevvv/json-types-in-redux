import { TYPE_POSTS, TYPE_TODOS, TYPE_USERS } from "../actions";

const initState = {
  types: "users",
  data: [],
};

export const rootReducers = (state = initState, actions) => {
  switch (actions.type) {
    case TYPE_TODOS:
      return { ...state, types: "todos" };
    case TYPE_USERS:
      return { ...state, types: "users" };
    case TYPE_POSTS:
      return { ...state, types: "posts" };
    default:
      return state;
  }
};
