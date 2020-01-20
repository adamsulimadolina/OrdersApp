import React from 'react';

const SortButton = (props) => {
    return (
        <button className="btn btn-secondary m-2" onClick={props.sortfunction}>{props.text}</button>
    )
}


export default SortButton;