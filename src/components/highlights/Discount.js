import React, {useState, useEffect} from 'react'
import { Fade, Slide} from "react-awesome-reveal";

import Button from "../utils/MyButton";

export default function Discount() {
    const end =30;
    const [start, setStart]= useState(0);

    function percentage(){
        if (start < end) {
            setStart(prevCount=> prevCount +1);
        }
        
    }


    useEffect(()=>{
        if (start >0 && start < 30){
            setTimeout(()=>{
                setStart(prevCount=> prevCount +1);
            }, [30])
        }
    }, [start])

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
             
             <Fade onVisibilityChange={(inView)=>{
                 if(inView){
                     percentage()
                 }
                 
             }}>
                 <div className="discount_porcentage">
                        <span>{start}%</span>
                        <span>OFF</span>
                 </div>
             </Fade>

             <Slide right>
                    <div className="discount_description">
                        <h3>Purchase Tickets</h3>
                        <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</p>

                        <Button 
                            text="Purchase tickets"
                            link="http://google.com"
                            size={"small"}
                            style= {{background:"#ffa800", color:"#ffffff"}}
                        />
                    </div>
             </Slide>
            </div>
        </div>
    )
}
