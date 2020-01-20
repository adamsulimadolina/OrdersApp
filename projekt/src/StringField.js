import React from 'react'
import StringInput from './StringInput'

function StringField({ label, ...inputProps }) {

    return (
        <div className="string-field field">
            <label>{label}</label>
            <StringInput {...inputProps} />
        </div>
    )
}

export default StringField
