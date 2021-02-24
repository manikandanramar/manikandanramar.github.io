import React, { PureComponent } from 'react';
import { string, oneOf, func } from 'prop-types';

export default class Input extends PureComponent {
  static propTypes = {
    value: string,
    default: string,
    className: string,
    type: oneOf(['text', 'password', 'textarea']),
    onInputChange: func,
    name: string,
  };

  onValueChange = (event) => {
    this.props.onInputChange(event.target.value, this.props.name);
  }

  render() {
    const { value, className, type, name, onInputChange, ...others } = this.props;

    if (type === 'textarea') {
      return <textarea {...others} className={className} onChange={this.onValueChange} >{value}</textarea>;
    } else {
      return <input {...others} type={type} className={className} onChange={this.onValueChange} />;
    }
  }
}