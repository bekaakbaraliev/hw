import DelButton from "./DelButton"
import Button from "../UI/Button"
import Backdrop from "../UI/Backdrop"
import ReactDOM from "react-dom";
import React from "react";

const DelModalWindow =(props) => {
    function GiveDataHundler() {
        props.onDeleteHundler("false")
    }
    return <div className="ModalWindow">
            <p>Do you agree with the deletion?</p>
            <p>{`${props.text} ${props.number}(years old)`}</p>
            <div className="list">
            <DelButton id={props.id} onGiveDataHundler={GiveDataHundler} onBtnDelete={props.onDelete}>Delete</DelButton>
            <Button onClick={GiveDataHundler}>Cancel</Button>
            </div>
        </div>
}
const renderDelWindow = (props) => {
    return (<React.Fragment>
        {ReactDOM.createPortal(
                <Backdrop/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <DelModalWindow 
                onDelete={props.onDelete} 
                text={props.text} 
                number={props.number} 
                id={props.id} 
                onDeleteHundler={props.onDeleteHundler}/>,
                document.getElementById('modal-root')
            )}
    </React.Fragment>)
}
export default renderDelWindow