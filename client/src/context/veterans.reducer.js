import { GET_VETERAN_STATUS } from "./types";

export default (state, action) => {
  switch (action.type) {
    case GET_VETERAN_STATUS:
      return {
        ...state,
        loading: false,
        veteran_status: action.payload,
      };
    default:
      return state;
  }
};
