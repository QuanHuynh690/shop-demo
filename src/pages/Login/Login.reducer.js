import * as actionTypes from './Login.action'
import { useHistory } from 'react-router-dom'
const initState = {
    data: null,
    loading: false,
    error: null
  }
  // const history = useHistory()
  function LoginReducer(state = initState, action) {
    switch(action.type) {
      case actionTypes.LOGIN_REQUEST:
        return {
          ...state,
          loading: true
        }
  
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
        }
  
      case actionTypes.LOGIN_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error
        }
  
      default:
        return state
    }
  }
  
  export default LoginReducer