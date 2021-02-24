import React, { PureComponent } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

export default class Image extends PureComponent {
  static propTypes = {
    source: string,
    className: string,
    variation: string,
  };

  render() {
    const { className, source, variation, ...others } = this.props;
    const imageClass = classNames(className, { [styles[variation]]: styles[variation] });

    return <img className={imageClass} src={source} {...others} />;
  }
}
