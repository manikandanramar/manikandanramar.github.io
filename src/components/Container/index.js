import React, { PureComponent } from 'react';
import { string, node, oneOfType } from 'prop-types';

export default class Container extends PureComponent {
  static propTypes = {
    children: oneOfType([string, node])
  };

  render() {
    const { children, ...others } = this.props;

    return <div {...others} dangerouslySetInnerHTML={{ __html: children }} />;
  }
}
