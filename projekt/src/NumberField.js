import React from 'react'
import NumberInput from './NumberInput'

 function NumberField({ label, ...inputProps }) {
    return (
        <div className="string-field field">
            <label>{label}</label>
            <NumberInput {...inputProps} />
        </div>
    )
}

export default NumberField;