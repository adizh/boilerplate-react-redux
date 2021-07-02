
const initState={
    currency:[],
    rates:[]
}
const GET_CURRENCY='GET_CURRENCY'
const GET_RATES='GET_RATES'


const func=(state = initState, action) => {
    switch(action.type) {
        case GET_CURRENCY:
            return {...state, currency: action.currency};
                 case GET_RATES:
            return {...state, rates: action.rates};
        default:
            return state
    }
};
export default func
export const getCurrency=(data)=>{
  return(dispatch)=>{
      dispatch({type:GET_CURRENCY,currency:data})
  }
}

export const getRates =(data)=>{
      return(dispatch)=>{
      dispatch({type:GET_RATES,rates:data})
  }
}
=======
import axios from  'axios'
const initialState={
    getSpeed:[]
}
const GET_SPEED='GET_SPEED'
export default(state=initialState,action)=>{
    switch(action.type){
        case GET_SPEED:{
            return{
                ...state,getSpeed:action.getSpeed
            }
        }
        default : return state
    } 
  
}
export const getSpeedData = (name) => {
    const API_KEY='AIzaSyD3KABCkXX3INWbQWspfP8aj48urCYs0BA'
    return (dispatch) => {
        axios(`
         https://www.googleapis.com/
         pagespeedonline/v5/runPagespeed?url=${name}/file/szMeBmoSdDOTsIpva6bIhT/GrowBe?node-id=1%3A2&key=${API_KEY}`)
            .then(({data}) => {
                dispatch({type: GET_SPEED, getSpeed: data})
            })
            .catch((err)=>{
                console.log(err)
            })
    }
};
>>>>>>> 5cc6083380017b9037dac1162d8cd49ff428642e
