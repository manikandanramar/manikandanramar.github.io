import React, { PureComponent } from 'react';
import { string, node, oneOfType } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

export default class Link extends PureComponent {
  static propTypes = {
    to: string,
    className: string,
    children: oneOfType([string, node]),
  };

  render() {
    return <RouterLink {...this.props} >{this.props.children}</RouterLink>;
  }
}
