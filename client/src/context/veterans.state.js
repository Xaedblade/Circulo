import { useReducer } from "react";
import axios from "axios";
import veteranReducer from "./veterans.reducer";
import { GET_VETERAN_STATUS } from "./types";
import VeteransContext from "./veterans.context";

const VeteranState = (props) => {
  const initialState = {
    veteranDetails: null,
    veteran_status: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(veteranReducer, initialState);

  // get veteran status
  const getVeteranStatus = async (veteran) => {
    try {
      const res = await axios.post(`/api/veterans/status`, veteran, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data.data.veteran_status);
      dispatch({
        type: GET_VETERAN_STATUS,
        payload: res.data.data.veteran_status,
      });
    } catch (err) {}
  };

  return (
    <VeteransContext.Provider
      value={{
        veteranDetails: state.veteranDetails,
        error: state.error,
        loading: state.loading,
        veteran_status: state.veteran_status,
        getVeteranStatus,
      }}
    >
      {props.children}
    </VeteransContext.Provider>
  );
};
export default VeteranState;
