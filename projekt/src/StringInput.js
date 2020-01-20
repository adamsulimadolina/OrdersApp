import React, {Component} from 'react'

export default class StringInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
          this.props.onChange(e.target.value);
      }

      render() {
          const {
              className,
              defaultValue,
              placeholder
          } = this.props;

          return (
              <input className={className} type="text" placeholder={placeholder} defaultValue={defaultValue} onChange={this.handleChange} />
          )
      }


}