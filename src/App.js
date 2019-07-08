import React, {Component} from 'react';

const List = (props) => {
    return ( <div>
            <ul>
                {props.animal.map(el  => <li>
                    <img src = {el.image}
                    ></img>
                    {el.name}
            </li>)}
            </ul>
    </div>)
}
export default List

/*  ----------------------------------- */
import React, {Component} from 'react';

class List extends Component {
    constructor (props){
        super(props)
        this.state = {}
    }

    render(){
        return (

        )
}
}
export default List

/*****    creating a button                   */

render(){
return (button) onClick = {()=> this.handleClick()} >
change button;
</button>
{this.state.animal? (
    <List animal = {cats}/>): ()
    <List animal = {dogs}/>)  }
    )
export default App
}