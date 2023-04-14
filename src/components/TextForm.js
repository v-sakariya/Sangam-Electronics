import React, { useState } from 'react'

export default function TextForm(props) {

        const handleUpClick = () => {
            let newText = text.toUpperCase()
            setText(newText)
            props.showAlert("Converted to Upper Case",'success')
        }
        const handleLowerClick = () => {
            let newText = text.toLowerCase()
            setText(newText)
            props.showAlert("Converted to Lower Case",'success')
        }
        const handleCapClick = () => {
            let arr = text.split(" ")
            for(let i=0;i<arr.length;i++){
                arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substring(1)
            }
            setText(arr.join(' '))
            props.showAlert("Converted to Capitalized Case",'success')
        }
        const handleCopy = () => {
            let text = document.getElementById('myBox')
            text.select()
            navigator.clipboard.writeText(text.value)
            props.showAlert("Text Copied to Clipboard",'success')
        }
        const handleExtraSpaces = () => {
            let newText = text.split(/[ ]+/)
            setText(newText.join(' '))
            props.showAlert("Extra Spaces removed",'success')

        }
        const handleOnChange = (event) => {

            setText(event.target.value)
        }
        const [text,setText] = useState('')
    return (
        <><div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id='myBox' rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCapClick}>Convert to CapitalizedCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the text box above to preview"}</p>
    </div>

    </>
        
    )
}
