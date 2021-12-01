import "./Block.css"
const Block =(props)=> {
    return <div className="Block">
        <div className="BoxForTitle">
            <p className="Title">Title Here</p>
            <div className="BoxForId">{props.id}</div>
        </div>
        <p className="Text">{props.title}</p>
        <img className="images" src={props.img}></img>
    </div>
}
export default Block