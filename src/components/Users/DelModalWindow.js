import Card from "../UI/Card"
import DelButton from "./DelButton"
const DelModalWindow =(props) => {
    return <Card>
        <p>You agree with it?</p>
        <DelButton id={props.id} onDelete={props.onModalDelete}/>
    </Card>
}
export default DelModalWindow