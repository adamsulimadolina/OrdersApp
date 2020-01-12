import React from 'react';

function ButtonAdd(props) {
    return (
        <button className="btn btn-dark" type="button" onClick={(e) => props.func(e)}>
            Add
        </button>
    )
}

export default ButtonAdd;