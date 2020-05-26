import React, {useState, useEffect} from "react"
import axios from "axios"


const New = props =>{
    useEffect(() => {
        axios.get("localhost:8000/api/businesses") 
            .then(res => {
                console.log(res.data.Businesses.length)
            )}
        // .catch(error => {
        //     console.log("Houston! We have a problem withour database!", error)
        // )}
        
    )}
}

export default New
