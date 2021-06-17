import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { settings } from '@material-ui/icons';


import slide_one from     "../../resources/images/slide_one.jpg";
import slide_two from     "../../resources/images/slide_two.jpg";
import slide_three from "../../resources/images/slide_three.jpg";



function Carrousel() {

    var settings = {
        dots: false,
        isFinite: true,
        autoplay:true,
        speed: 500,
        
    }


    return (
        <div className= "carrousel_wrapper" 
        style={{height: `${window.innerHeight}px`}}
        >
            <Slider {...settings}>
                <div>
                    <div className= "carousel_image" style={{ backgroundImage: `url(${slide_one} `}, {height: `${window.innerHeight}px`}}></div>
                </div>

                <div>
                    <div className= "carousel_image" style={{ backgroundImage: `url(${slide_two})`}, {height: `${window.innerHeight}px`}}></div>
                </div>
                <div>
                    <div className= "carousel_image" style={{ backgroundImage: `url(${slide_three})`, height: `${window.innerHeight}`}}></div>
                </div>
                
            </Slider>
        </div>
    )
}

export default Carrousel;

















/*import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css';  


export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: true,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          return (  
            <div>  
            <div class='container' >        
            <div className="row title" style={{marginBottom: "20px"}} >        
            <div class="col-sm-12 btn btn-info">        
            Slick Carousel In React Application     
            </div>        
            </div>    
            </div>  
            <Slider {...settings} >  
              
              <div className="wdt">  
              <img  className="img" src= {'../../../public/assets/slide_one.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'../../../public/assets/slide_two.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'../../../public/assets/slide_three.jpg'} className="img"/>  
              </div>  
              
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo */ 






















