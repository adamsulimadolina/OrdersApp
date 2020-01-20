import React, {Component} from 'react'

export default class StringInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(e) {
          this.props.onChange && this.props.onChange(e.target.value);
      }

      render() {
          const {
              className,
              defaultValue,
              key
          } = this.props;

          return (
              <input className={className} key={key} type="number" defaultValue={defaultValue} onChange={this.handleChange} />
          )
      }


}