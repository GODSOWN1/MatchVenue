import React, {useState, useEffect} from 'react';
import { AppBar, Toolbar, IconButton}   from "@material-ui/core";
import MenuIcon    from "@material-ui/icons/Menu";
import SideDrawer  from "./SideDrawer";
import { LaptopWindows } from '@material-ui/icons';


function Header() {

    const [drawerOpen, setDrawerOpen]= useState(false);
    const [headerShow, setHeaderShow]= useState(false);

    function handleScroll(){
        if(window.scrollY>0){
            setHeaderShow(true)
        }else {
            setHeaderShow(false);
    }
    }

        function toggledrawer (value){
            console.log('yes')
            setDrawerOpen(value)
        }  
    
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
    }, [])


    
    return (

        <AppBar 
            position="fixed" 
            style={{
                backgroundColor: headerShow? "#2f2f2f": "transparent", 
                boxshadow:"none", 
                padding:"10px", }}
                >

            <Toolbar>
                <div className="header_logo">
                    <div className= "font_righteous hearder_logo_venue">The Venue</div>
                    <div className= "header_logo_title">Musical Events</div>
                </div>
            </Toolbar>

            <IconButton 
                    aria-aria-label="Menu"
                    color="inherit" 
                    style= {{ marginLeft:"1200px"}}
                    onClick= {()=>toggledrawer(true)}
                    
                    >
                    
                    <MenuIcon />
            </IconButton>
            
            <SideDrawer
            
            open= {drawerOpen}
            onClose={(value)=>toggledrawer(value)}
            />
        </AppBar>
        
    )
}

export default Header;