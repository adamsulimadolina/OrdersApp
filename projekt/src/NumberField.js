import React from 'react'
import NumberInput from './NumberInput'

 function NumberField({ label, ...inputProps }) {
    return (
        <div className="string-field field">
            <NumberInput {...inputProps} />
        </div>
    )
}

export default NumberField;