import React, { PureComponent } from 'react';
import { string } from 'prop-types';

export default class Text extends PureComponent {
  static propTypes = {
    value: string,
    className: string
  };

  render() {
    const { value, ...others } = this.props;

    return <p {...others} >{value}</p>;
  }
}
