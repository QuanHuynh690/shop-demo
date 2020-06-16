import axios from "axios"

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export function loginRequestAction() {
    return {
        type: LOGIN_REQUEST
        
    }
}

export function loginSuccessAction(token) {
    return {
        type: LOGIN_SUCCESS,
        data: token
    }
}

export function loginFailureAction(error) {
    return {
        type: LOGIN_FAILURE,
        error:error
    }
}

// export function getLoginAction() {
//     return async (dispatch) => {
//       dispatch(loginRequestAction())
  
//       try {
//         const result = await axios({
//           method: "POST",
//           url: "https://min-shop.herokuapp.com/rest/user/signIn",
//           data
//         });
    
//         console.log(result.data);
//         localStorage.setItem("token", result.data.accessToken)
//         if(history.location.state.from.pathname) {
//           history.push(history.location.state.from.pathname)
//         } else {
//           history.push('/')
//         }
        
//       } catch (error) {
//         setErrorMessage(error.response.data.message)
//       }
//     }
//   }