import "./DelButton.css"

const DelButton =(props)=> {
    // console.log(props)
    const DeleteClickHandler =()=> {
        props.onBtnDelete(props.id)
        props.onGiveDataHundler("false")
    }
    return <button className="btnCancel" onClick={DeleteClickHandler}>{props.children}</button>;
    
}

export default DelButton