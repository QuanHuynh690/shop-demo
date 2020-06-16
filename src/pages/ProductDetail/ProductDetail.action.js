export const PRODUCT_DETAIL_REQUEST = "PRODUCT_DETAIL_REQUEST"
export const PRODUCT_DETAIL_SUCCESS = "PRODUCT_DETAIL_SUCCESS"
export const PRODUCT_DETAIL_FAILURE = "PRODUCT_DETAIL_FAILURE"

export function productDetailRequestAction() {
    return {
        type: PRODUCT_DETAIL_REQUEST
    }
}

export function productDetailSuccessAction(data) {
    return {
        type: PRODUCT_DETAIL_SUCCESS,
        data
    }
}

export function productDetailFailureAction(error) {
    return {
        type: PRODUCT_DETAIL_FAILURE,
        error:error
    }
}

// export function getProductDetailAction() {
//     return async (dispatch)=>{dispatch(productDetailRequestAction())

//     try {
//         const result= await axios({
//             method: 'GET',
//             url: 'https://min-shop.herokuapp.com/rest/product'
//         })
//         console.log(result.data.data)
//         dispatch(productListSuccessAction(result.data.data))
//     } catch(error){
//         dispatch({
//             type: PRODUCT_LIST_FAILURE,
//             error:error
//         })
//     }
// }}
