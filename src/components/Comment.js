import React,{useState} from 'react';
import Form from './Form';

function Comment (props) {
    // const [comment,setComment] = useState('')
    function onAddCommentHundler(listComment) {
        const Data = {
            ...listComment,
            id: Math.random().toString(),
        }
        props.onAddList(Data)  
    }
    return <div>
        <Form onAddComment={onAddCommentHundler}/>
    </div> 
}
export default Comment