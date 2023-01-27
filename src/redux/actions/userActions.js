import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from "../constants/userConstants"
import api from "../../api/user";

export const getUsers = () => async (dispatch) => {
     try {
          dispatch({
               type: GET_USER_REQUEST
          })

          const response = await api.get("/users")
          dispatch({
               type: GET_USER_SUCCESS,
               payload: response.data
          })
     }
     catch (error) {
          dispatch({
               type: GET_USER_FAIL,
               payload: error.error
          })
     }
}
