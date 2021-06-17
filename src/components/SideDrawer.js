import React from 'react'
import { Drawer, List, ListItem } from '@material-ui/core';
import { scroller } from "react-scroll";

function SideDrawer({open, onClose}) {

      const links= [
      {where:"featured",   value:"to top"},
      {where:"venueinfo",  value:"venue info"},
      {where:"highlights", value:"highlights"},
      {where:"pricing",    value:"pricing"},
      {where:"location",   value:"location"}
    ]


  function scrollToElemnt(element){
          scroller.scrollTo(element, {
            duration:1500,
            delay:100,
            smooth: true,
            offset:-150
          });
          onClose(false)
  }

    function renderItem(item){
      return(
        <ListItem button onClick ={()=> scrollToElemnt(item.where)} key={item.where}>
            {item.value}
        </ListItem>
      )
      
    } 

      return (

              <Drawer
              anchor="right"
              open= {open}
              onClose={()=>onClose(false)}
              >

              <List component="nav">
                {links.map((item)=>renderItem(item) )}
              </List>

              </Drawer>
            
    )
}

export default SideDrawer;
