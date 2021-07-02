import React from 'react';
import dribble from '../image/dribbble_illustration_v3 1.png'
import icon1 from '../image/Icon (4).png';
import icon2 from '../image/Icon (5).png';
import icon3 from '../image/Icon (6).png';
import Achievments from './Achievments';



const Need = () => {
    return (
        <div><section className='need'>
            <div >
                <img src={dribble} className='need_pic'/>
            </div>
            <div className='need_info'>
                <div className='need_title'>You may ask what
SEO & why do you need it?</div>
                <div className='need_text'>

                Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary.
                </div>
                <div className='need_card'>

                    
                    <div className='need_card_img'>
                        <img src={icon1}/>
                    </div>
                  <div>
                  <div className='need_card_title'>Social Media Marketing</div>
                    <div className='need_card_text'>

                    Business applications through revolutionary catalysts
for chang the Seamlessly underwhelm dures.
                    </div>
                  </div>
                </div>
                <div className='need_card'>

                    
                    <div className='need_card_img'>
                        <img src={icon2}/>
                    </div>
                  <div>
                  <div className='need_card_title'>Email Marketing</div>
                    <div className='need_card_text'>

                    Business applications through revolutionary catalysts
for chang the Seamlessly underwhelm dures.
                    </div>
                  </div>
                </div>
                <div className='need_card'>

                    
                    <div className='need_card_img'>
                        <img src={icon3}/>
                    </div>
                  <div>
                  <div className='need_card_title'>SEO Optimization</div>
                    <div className='need_card_text'>

                    Business applications through revolutionary catalysts
for chang the Seamlessly underwhelm dures.
                    </div>
                  </div>
                </div>
           
                
           
           
            </div>
          
        </section>
        <Achievments/>
        </div>

    );
};

export default Need;