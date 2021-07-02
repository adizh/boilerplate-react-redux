import React from 'react';
import backImg from '../image/illustration (3).png'
import Plan from './Plan'
import {getSpeedData} from '../redux/reducers/reducer'
import {useDispatch} from 'react-redux'
const Speed =()=>{
    const dispatch=useDispatch() 
const speedSubmit=(e)=>{
    e.preventDefault();
    dispatch(getSpeedData(e.target.children[0].value))
    console.log(e.target.children[0].value)
}
    return(
        <div>         
<div className='speed'>
<div className='speed_check'>
<div className='speed_title'>Check Your Website Speed </div>
    <div className='speed_text'>
    Distinctively exploit optimal alignments for intuitive bandwidth.
Quickly coordinate e-business through revolutionary.
    </div>
    <form  onSubmit={speedSubmit} className='speed_form'>
        <div className='speed_input'>
            <input type='url' placeholder='WEB URL'/>
        </div>
            <button type='submit' className='speed_btn'>Submit</button>
    </form>
</div>
<div className='speed_img'> 
    <img src={backImg}/>
</div>
</div>
<Plan/>
        </div>
    )
}
export default Speed