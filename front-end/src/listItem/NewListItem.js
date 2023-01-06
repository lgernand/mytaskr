import React from "react";
import "./NewListItem.css"

function NewListItem(props) {
    return(
        <div className="NewListItemContainer">
            <div className="NewListItem">
                <input className="newItemTask" type="text" placeholder="enter your new task" value={props.newItem}
                    onChange={props.handleUpdateNewItem}
                ></input>
                <input className="newItemTime" type="number" placeholder="ETA (hours)" value={props.newTime}
                    onChange={props.handleUpdateNewTime}
                ></input>
                <button
                    onClick={props.handleAddItem}
                >post new task</button>
            </div>
        </div>
    );
}

export default NewListItem;