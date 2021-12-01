import React, {useState, useEffect} from "react";
import Block from "./Block"
import "./Content.css"

const Content =() => {
    const [serverData, setServerData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos?_limit=9')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setServerData(data)
        });
    },[])
    return <div className="content">
            {serverData.map(user => (
                <Block title={user.title} id={user.id} img={user.thumbnailUrl}/>
            ))}
        </div>
}
export default Content