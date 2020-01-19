import React from 'react';

const SortButton = (props) => {
    return (
        <button onClick={props.sortfunction}>{props.text}</button>
    )
}


export default SortButton;