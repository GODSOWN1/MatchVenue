import React from 'react';
import MyButton from "../utils/MyButton";
import { Zoom } from 'react-awesome-reveal';

function Pricing() {
    const  allways = ['me', 'you', 'us']

    const priceState= {
        prices: [100, 150, 200],
        position: ["Balcony", "Medium", "Star"],
        desc: [
            "avyanbanamajuwjshcjksckkscmkscjl",
            "gkdköshfjk-lefefcmsm.le-fijksm,.",
            "bfekjfkjefiökjdwsäpasöljasjökdwh",
        ],
        linkTo: ["http://cdjj.com", "http://sgsjk.com", "http://jslhs.com"],
        delay: [500, 0, 500]
    }
    
    function showBoxes(){
            return (
                priceState.prices.map((box,index)=>{
                    return(   
               
               <Zoom key={index} className="pricing_item" delay={priceState.delay[index]}>
               
                   <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                <span>${priceState.prices[index]}</span>
                <span>{priceState.position[index]}</span>
                
                   </div>
                   <div className="pricing_description">
                   <span>{priceState.desc[index]}</span>
                   </div>
                   <div className="pricing_button">
                   <MyButton
                            text="Purchase tickets"
                            link={priceState.linkTo[index]}
                            size={"large"}
                            style= {{background:"#ffa800", color:"#ffffff"}}
                   />
                   </div>

                </div>

           </Zoom>)
           })
            )
        }


        return(
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                  
                    <div className="pricing_wrapper">
                        { showBoxes()}
                    </div>
                </div>
            </div> 
        
        
        )
    }
    
    export default Pricing;
    
    