import React,{useState} from "react";
import Card from "../UI/Card";
import "./UsersList.css"
// import DelButton from "./DelButton";
import DelModalWindow from "./DelModalWindow";
import Button from "../UI/Button";
// import DelModalWindow from "./DelModalWindow";

const UsersList = props => {
    const [modalWin,setModalWin] = useState("false")
    const [text,setText] = useState("")
    const [number,setNumber] = useState("")
    const [Id,setId] = useState("")

    if(modalWin === "true") {
        function onDeleteHundler(props) {
            if(props === "false"){
                setModalWin("false")
            }
        }
            return <DelModalWindow 
            onDelete={props.onDeleteEl} 
            text={text} 
            number={number} 
            id={Id} 
            onDeleteHundler={onDeleteHundler}/>
    }
    return (
        <Card className="users">
            <ul>
                {props.users.map(user =>
                    <li className="list" key={user.id}>
                        {user.name} ({user.age} years old)
                        <Button onClick={()=> {
                            setId(user.id)
                            setModalWin("true")
                            setText(user.name)
                            setNumber(user.age)
                        }}>Delete</Button>
                    </li>)}
            </ul>
        </Card>
    )
}

export default UsersList;