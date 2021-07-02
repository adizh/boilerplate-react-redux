import React from 'react';
import Logo from '../image/logo.png'
import GrowBe from '../image/GrowBe.png'
import {Dropdown} from 'react-bootstrap'
import Elem from '../image/pngfind.png'
import element from '../image/element.png'
import icon from '../image/icon.png'
import Solution from './Solution'
import Card from './Card'
import PicPartners from './PicPartners'
const Home = () => {
    return (
        <div>
            <div className="nav">
               <div className='nav_logo'>
                   <img src =
             {Logo} className='growBe'/>
                   <img src={GrowBe}/>  
                </div>
                <div className='nav_links'>
                    <a href="" className="nav_li">home</a>
                    <a href="" className="nav_li">about us</a>
                    <a href="" className="nav_li">services</a>
                 
                    <Dropdown  id='dropdown'>
  <Dropdown.Toggle   className='drop_nav_li' variant="success" id="dropdown-basic">
    Features
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

                    <a href="" className="nav_li">team</a>
                    <a href="" className="nav_li">blog</a>
                    <a href="" className="nav_li">contact</a>
                    <a href="" className="nav_li_btn">get started</a>
                </div>

            </div>
            <div className='main_home'>

              <div className='seo'
              
              style={{ backgroundImage: `url(${element})`,
              backgroundRepeat: 'no-repeat',
              width:'550px' 
            }}
              >
                <h1 className="seo_header"> SEO & Digital
Marketing For Your
Website.</h1>
<p className='seo_subtext'>
Provide all kind of seo services and help to improve
seo ranking. Globally incubate standards.
</p>
<div className="seo_links">
<div><button className='seo_btn'>Start Now</button>
</div>  
<div className='seo_video'>
  <div>
  <a href="">
  <img src={icon} />
  </a>
  </div>
  
<div>  <a href="" className='seo_link'>Watch Video</a>
</div>  
</div>

</div>
              </div>
              <div className='pic'>
                <img src={Elem} className='left_pic'/>
              </div>

            </div>

          <PicPartners/>

            

<Solution/>
<Card/>















        </div>
    );
};

export default Home;