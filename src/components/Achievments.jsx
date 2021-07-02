import React from 'react';
import Speed from './Speed'
const Achievments = () => {
    return (
      <div>
      <div className='achieve'>


          <div className='achive_info'>
              <div className='achive_num' id='warning'>95</div>
              <div className='achive_text'>happy clients</div>
            </div>
            <div className='achive_info'>
            <div className='achive_num' id='success'>115</div>
              <div className='achive_text'>project done</div>
            </div>
            <div className='achive_info'>
            <div className='achive_num' id='danger'>8+</div>
              <div className='achive_text'>year of experience</div>
            </div>
            <div className='achive_info'>
            <div className='achive_num'>12</div>
              <div className='achive_text'>national awards</div>
            </div>
        </div>
        <Speed/>
        </div>
    );
};

export default Achievments;