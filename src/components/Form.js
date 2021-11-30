import React, {useState} from 'react';
import "./Form.css"

function Form (props) {
    const[formComment,setFormComment] = useState('')
    const[formDate,setFormDate] = useState('')
    function FormCommentHundler(e) {
        setFormComment(e.target.value)
    }
    function FormDateHundler(e) {
        setFormDate(e.target.value)
    }
    const AgreeHundler =(e)=> {
        e.preventDefault();
        let data = {
            comment: formComment,
            date: new Date(formDate)
        }
        props.onAddComment(data)

        setFormComment('')
        setFormDate('')
    }

    return <div className="form">
        <form onSubmit={AgreeHundler}>
        <h1>Hello user!</h1>
        <input 
        className="inputText"
        type="text" 
        required 
        placeholder="your comment"
        onChange={FormCommentHundler}
        value={formComment}
        />
        <input
        className="inputDate"
        type="datetime-local"
        onChange={FormDateHundler}
        value={formDate}
        required
        />
        <button className="btnAgree" type="submit">agree?</button>
    </form>
    </div>
}
export default Form