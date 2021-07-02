import React from 'react';
import icon1 from '../image/icon (1).png';
import icon2 from '../image/icon (2).png';
import icon3 from '../image/icon (3).png';
import Features3 from '../image/Features 03.png'
import {Container,Row,Col} from 'react-bootstrap'

import Reasons from './Reasons'
const Card = () => {
    return (
            <div className='advantages'>


<Container>

 <Row>
    <Col md='4'>
    <button className='advan_card'>

<div className='card_img'>
<img src={icon1} />
</div>
<div className='card_title'>
Grow Your Business
</div>

<div className='card_text'>
Leverage agile frameworks to provide a robust synopsis for high level overviews.

</div>
<a href="" className='card_link'>Learn More...</a>
</button>
    </Col>






    <Col md='4'><div className='advan_card'>

<div className='card_img'>
<img src={icon2} />
</div>
<div className='card_title'>
Get Quality leads
</div>
<div className='card_text'>

Leverage agile frameworks to provide a robust synopsis for high level overviews.
</div>
<a href="" className='card_link'>Learn More...</a>
</div></Col>




    <Col md='4' ><div className='advan_card'>

<div className='card_img'>
<img src={icon3} />
</div>
<div className='card_title'>
Drive More Sales
</div>

<div className='card_text'>
Leverage agile frameworks to provide a robust synopsis for high level overviews.
</div>
<a href="" className='card_link'>Learn More...</a>
</div>

</Col>
  </Row>
</Container>

<Reasons/>

</div>


        
    );
};

export default Card;