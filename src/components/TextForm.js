import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowClick = () => {
        console.log("LowerCase was clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        console.log("Handle On Change")
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text here")
  return (
    <>
        <div className="container" style={{ color: props.mode === 'dark'? 'white' : 'black' }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'? 'grey' : 'white', color: props.mode === 'dark'? 'white' : 'black' }} placeholder="Leave a comment here" id="myBox" rows="8"></textarea>
            </div>
            <div className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</div> 
            <div className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</div>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'dark'? 'white' : 'black'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
            <h1>Preview</h1>
            <p>{text}</p>
        </div>
    </>
  );
}
