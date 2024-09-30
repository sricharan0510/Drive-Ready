import React from "react";
import "./my-comp.css";
import hello from "./Sample.module.css"
import { BiAccessibility } from "react-icons/bi";

export function Demo() {
    const internalCss = {
        demo: {
            backgroundColor: "green",
            color: "white",
            textAlign: "center",
            padding: "10px",
        }
    }
    return (
        <div>
            <h1 style={internalCss.demo}>Internal CSS</h1>
            <BiAccessibility color="red"fontSize="32px"/>
        </div>
    )
}

export const Sample = () => {
    return (
        <>
            <p style={{
                color: "red",
                backgroundColor: "yellow",
                fontWeight: 700,
                padding: "10px",
                textAlign: "center"
            }}>
                Inline-styles
            </p>
            <p className="sampleClass">External Styling</p>
            <div className={hello.Hello}>Module Styling</div>
            <div className={hello.globalStyling}>Global styling</div>
        </>
    )
}

// export { Demo, Sample };