import "./AnchorList.css"
import { Router , Route, Link} from "react-router-dom";

interface Prop{
    items: string[]
    links: string[]
}
function AnchorList({items,links} : Prop){
    const anchors = items.map((item,i) => <li key={item}> <a href={"/"+links[i]}> {item}</a></li>);
    console.log(items);
    return <ul> {anchors}</ul>
}

export default AnchorList;