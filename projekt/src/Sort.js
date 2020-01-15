import React from 'react';

function Sort(props) {
    return (
        <div>
            <button type="button" onClick={() => props.func()}>SORT</button>
        </div>
    );
};

export default Sort;