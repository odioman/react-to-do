import React from 'react';

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through",
    }
    return (
        <div className="todo-item">
            <p style={props.item.completed ? completedStyle : null}>
                <input 
                    type="checkbox" 
                    checked={props.item.completed}
                    onChange={() => props.handleChange(props.item.id)}
                    /> 
                {props.item.text}
            </p>
        </div>
    )
}

export default TodoItem;