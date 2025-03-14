import { MouseEvent, useState } from "react";
interface ListGroupProps{
    items: string[]
    header: string
    onSelectItem: (item: string) => void
}
function ListGroup({items,header,onSelectItem} : ListGroupProps){

    const [selectedIndex,setSelectedIndex] = useState(-1);

    return <> <h1> {header} </h1>
    <ul className="list-group" onMouseLeave={()=>setSelectedIndex(-1)}> 
        {items.map((item,index) => <li className={selectedIndex==index ? 'list-group-item active' : 'list-group-item'} onMouseEnter={() => {setSelectedIndex(index); onSelectItem(item)} }>  {item} </li>)}
    </ul>
    </>
    
}

export default ListGroup;