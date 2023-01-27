import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from "../constants/userConstants"

export const userReducer = (state = [], action) => {
     switch (action.type) {
          case GET_USER_REQUEST:
               return {
                    ...state,
                    loading: true,
               }

          case GET_USER_SUCCESS:
               return {
                    loading: false,
                    users: action.payload
               }

          case GET_USER_FAIL:
               return {
                    loading: false,
                    error: action.payload
               }

          default:
               return state
     }
}