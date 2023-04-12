import React, { useState } from 'react'

export default function TextForm(props) {

        const handleUpClick = () => {
            let newText = text.toUpperCase()
            setText(newText)
        }
        const handleLowerClick = () => {
            let newText = text.toLowerCase()
            setText(newText)
        }
        const handleCapClick = () => {
            let arr = text.split(" ")
            for(let i=0;i<arr.length;i++){
                arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].substring(1)
            }
            setText(arr.join(' '))
        }
        const handleOnChange = (event) => {

            setText(event.target.value)
        }

        const [text,setText] = useState('')
    return (
        <><div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapClick}>Convert to CapitalizedCase</button>
    </div>
    <div className="container my-2">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
        
    )
}
