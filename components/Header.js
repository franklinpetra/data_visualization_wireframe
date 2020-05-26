import React from "react";
import mapDemo from "./img/mapDemo.png";

const Header = props =>{

    
    return(
        <div className="container">
            <div className="jumbotron" style={{height:"1800px", width:"1250px"}}>
                <div className = "row" >
                    <div className= "col-12 text-center">
                        <h1 style ={{fontSize:"70px", marginTop: "50px"}}>Data Visualization</h1>
                        <p style= {{wordWrap:"normal"}}>A Full Stack Mern Project by John Stevens,</p>
                        <h2 style={{backgroundColor:"#f5f5f5", color:"darkgrey"}}>Washington State's Small Business Sector</h2>
                            <div style={{backgroundImage:`url(${mapDemo})`, backgroundSize:"cover" , width:"1200px", height:"900px"}}>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header