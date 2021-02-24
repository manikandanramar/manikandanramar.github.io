import React, { PureComponent } from 'react';
import { string, func, node } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

export default class Button extends PureComponent {
  static propTypes = {
    label: string,
    className: string,
    variation: string,
    onClick: func,
    children: node
  };

  state = {
    show: false,
  };

  onMenuButtonClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { className, label, variation, onClick, children, ...others } = this.props;
    const buttonClass = classNames(styles.common, className, { [styles[variation]]: styles[variation] });
    const menuButtonContentClass = classNames(styles.menuButtonContent, { [styles.show]: this.state.show });

    if (variation === "menuButton") {
      return (
        <div className={styles.menuButtonWrapper}>
          <button onClick={this.onMenuButtonClick} className={buttonClass}>{label}</button>
          <div className={menuButtonContentClass}>
            {children}
          </div>
        </div>
      );
    }

    return <button className={buttonClass} onClick={onClick} {...others} >{label || children}</button>;
  }
}
