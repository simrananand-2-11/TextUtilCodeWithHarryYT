import React, {useState} from 'react';
import './TextForm.css';

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked. ");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }

    const handleLowClick = ()=>{
      // console.log("Uppercase was clicked. ");
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to Lowercase", "success");
   }

   const handleCopy=()=>{
   
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied", "success");
   }

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed extra spaces", "success");
  }   

   const handleClearClick = ()=>{
    // console.log("Uppercase was clicked. ");
     let newText = "";
     setText(newText);
     props.showAlert("Text Cleared", "success");
 }
    const handleOnChange = (event)=>{
        //console.log("OnChange was clicked. ");
        setText(event.target.value);
        
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#0b036d'}}>
    <h1>{props.heading} </h1>
    <div className="input-group">
 
  <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#0b036d'}} aria-label="With textarea" rows="8"></textarea>
</div>
<button className="btn btn-primary btn-space mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary btn-space mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary btn-space mx-1" onClick={handleClearClick}>Clears screen</button>
<button className="btn btn-primary btn-space mx-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary btn-space mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className="container my-3" style={{color: props.mode==='dark'?'white':'#0b036d'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").length} Minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something in textbox above to preview it here."}</p>
</div>
</>
  );
}
