import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";



{/* Main Page*/}

class Main extends Component{
    render(){
        return(
            <div id="main-root" className=""> 
                <Header headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
                
                {/* Start Banner Area */}
                <div className="banner-area">

                </div>
                {/* Start Featured Articles Area */}
                <div className="featured-area">
                    
                </div>

                {/* Start Filtered Articles Area */}
                <div className="filtered-area">
                    
                </div>


                {/* Start Browse Area */}
                <div className="browse-area">
                    
                </div>
                <Footer />
                
            </div>
        )
    }
}
export default Main;