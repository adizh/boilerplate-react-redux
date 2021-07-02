import React from 'react'
export default function Currency({    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount}) {
  return (
       
    <div>
   
      <input type="number" className="input" id='currency' value={amount} onChange={onChangeAmount} />
      <select className='option_' value={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map((option,index)=>(
                      <option className='option_' key={index} value={option}>{option}</option>

        ))}
      </select>
     
    </div>
  )
}















































/* import React,{useEffect} from 'react';
import {getCurrency,getRates} from '../redux/reducers/reducer'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'

const Currency = () => {
const currencyData=useSelector(s=>s.reducer.rates)

console.log(currencyData)
    const dispatch=useDispatch()
      const getCurrencyData=()=>{
        axios('http://api.exchangeratesapi.io/v1/latest?access_key=615fdbb25d738d097ab77383d8f43eb2&format=1')
        .then(({data})=>{
           dispatch(getCurrency(data))
           dispatch(getRates(data.rates,data.base))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getCurrencyData()
    },[])
    return (
        <div>
            <input type='number'/>
            <select>

    {Object.keys(currencyData).map((el)=>(
    <option key={el} value={el}>{el}</option>
    ))}

            </select>
        
        </div>
    );
};

export default Currency; */