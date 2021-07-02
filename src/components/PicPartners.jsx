import React from 'react';
import first from '../image/1.png'
import second from '../image/6.png'
import three from '../image/3.png'
import four from '../image/4.png'
import five from '../image/5.png'
import six from '../image/six.png'
const PicPartners = () => {
    return (
        <div>
              <div className="partners">
              <div className='partner_img'><img src={first} alt="" /></div>
              <div className='partner_img'><img src={second} alt="" /></div>
              <div className='partner_img'><img src={three} alt="" /></div>
              <div className='partner_img'><img src={four} alt="" /></div>
              <div className='partner_img'><img src={five} alt="" /></div>
              <div className='partner_img'><img src={six} alt="" /></div>
            </div>
        </div>
    );
};

export default PicPartners;