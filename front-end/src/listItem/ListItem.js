import React from "react";
import './ListItem.css'

function ListItem(props) {
    const items = props.items;

    return (
        <div>
            {items.map(item =>  
                <div
                 className="listItemContent"
                 key={item.id}>
                    <p>{item.task}</p> 
                    <p>{item.estimatedTime} hours</p>
                    <div className="deleteButton"
                        onClick={event => {props.handleDeleteItem(event, item.id)}}
                    >X</div>
                </div>  
            )}
        </div>
    );
}

export default ListItem;