import React, {useState} from "react"
import Text from "./Text"
import Title from "./Title"
import Button from "./Button"
import './Block.css'
import TextV2 from "./TextV2"
const Block = () => {
    const [modal,setModal] = useState("false")
    function ModalClickHandler() {
        setModal("true")
    }
    function CloseModalClickHandler() {
        setModal("false")
    }
    if(modal === "true") {
        return <div>
            <TextV2>
            <Title>About Catherine</Title>
                My name is Catherine. I am fourteen years old. New Year is considered the most popular holiday in our family. At the beginning of December everybody has a festive mood. In the city the streets and shop windows are decorated with bright and motley garlands. A huge Christmas tree is put at the main square. We begin to prepare for the holiday. We buy Christmas-tree decorations, tinsel and gifts for each other at New Year’s fairs. At the end of December we put artificial Christmas tree and decorate it for the holiday. I help my mother to prepare a festive table on December 31. New Year’s Eve always seems to me magical and unforgettable. At midnight after president’s appearance on television chiming clock begins to strike. We wish each other a happy New Year and make a wish and then exchange gifts. When I was a child I found the gifts under the Christmas tree and I thought that Santa Claus had brought them. Although I’m already adult and I don’t believe that Santa Claus exists, on New Year’s Eve I want to find myself in the dream and to believe in a miracle.
                <Button onClick = {CloseModalClickHandler}>close story</Button>
            </TextV2>
        </div>
    }
    return <div className ="block">
        <Title>New Year</Title>
        <Text>My name is Catherine. I am fourteen years old. New Year is considered the most popular holiday in our family. At the beginning of December everybody has a festive mood. In the city the streets and shop windows are decorated with bright and motley garlands. A huge Christmas tree is put at the main square. We begin to prepare for the holiday. We buy Christmas-tree decorations, tinsel and gifts for each other at New Year’s fairs.</Text>
        <Button onClick = {ModalClickHandler}>view more</Button>
    </div>
}
export default Block