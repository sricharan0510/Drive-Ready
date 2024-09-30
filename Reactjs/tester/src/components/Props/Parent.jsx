import React from "react";
import Child from "./Child";
import "./Parent.css";
import image from "../../assets/react.svg";

export const Parent = () => {

    const studentDetails = {
        namme: "Aditya",
        roll: "22",
        College: "Pallavi"
    }
    const fun = () => {
        console.log("Its Clicked");
    }

    return (
        <div className="container">
            <div className="card">
                <Child name="Kittu" roll="4223" College="ACOE" studentDetails = { studentDetails } image = {image} fun={fun}/>
            </div>
            <div className="card">
                <Child name="Praveen" roll="4220" College="ACOE" studentDetails = { studentDetails } image = {image} fun={fun}/>
            </div>
            <div className="card">
                <Child name="Charan" roll="4250" College="ACOE" studentDetails = { studentDetails } image = {image} fun={fun}/>
            </div>
        </div>
    )
}