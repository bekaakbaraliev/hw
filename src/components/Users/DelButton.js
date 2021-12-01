import "./DelButton.css"

const DelButton =(props)=> {
    // console.log(props)
    const DeleteClickHandler =()=> {
        props.onDelete(props.id)
        props.onDeleteHundler("false")
    }
    return <button className="btnCancel" onClick={DeleteClickHandler}>{props.children}</button>;
    
}

export default DelButton