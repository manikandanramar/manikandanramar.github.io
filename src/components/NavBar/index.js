import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { string } from 'prop-types';
import Link from '../Link';
import Button from '../Button';
import { menus, title } from '../../config'
import styles from './styles.scss';

@connect((state) => ({ pathname: state.location.pathname }), {})
export default class NavBar extends PureComponent {
  static proptypes = {
    pathname: string
  };

  state = {
    menuClass: styles.collapseMenu,
    menuButtonClass: ''
  };

  onMenuToggle = () => {
    const menuClass = this.state.menuClass === styles.collapseMenu
      ? styles.expandMenu
      : styles.collapseMenu;
    const menuButtonClass = this.state.menuButtonClass
      ? ''
      : styles.cross;
    this.setState({ menuClass, menuButtonClass });
  }

  onMenuItemClick = () => {
    this.setState({ menuClass: styles.collapseMenu, menuButtonClass: '' });;
  }

  menubar = null;
  
  render() {
    return (
      <nav className={styles.navBar} >
        <Button className={styles.menuToggler} onClick={this.onMenuToggle} >
          <div className={`${styles.one} ${this.state.menuButtonClass}`} ></div>
          <div className={`${styles.two} ${this.state.menuButtonClass}`} ></div>
          <div className={`${styles.three} ${this.state.menuButtonClass}`} ></div>
        </Button>
        <div className={`${styles.menuWrapper} ${this.state.menuClass}`} >
          <ul className={styles.navBarMenu} >
            {
              menus.map((item, mIndex) => {
                if (item.to) {
                  const itemClass = this.props.pathname === item.to
                    ? `${styles.navBarMenuItem} ${styles.active}`
                    : styles.navBarMenuItem;
                  return (
                    <li key={mIndex}>
                      <Link className={itemClass} to={item.to} onClick={this.onMenuItemClick} >{item.name}</Link>
                    </li>
                  );
                } else if (item.drop) {
                  return (
                    <li key={mIndex} className={styles.dropDown} >
                      <Link className={styles.navBarMenuItem} to="#" >{item.name}</Link>
                      <ul className={styles.dropList} key={mIndex} >
                        {
                          item.drop.map((options, index) => {
                          return (
                            <li key={index} ><Link className={styles.dropItem} to={options.to} >{options.name}</Link></li>);
                          })
                        }
                      </ul>
                    </li>
                  );
                }
              })
            }
          </ul>
        </div>
      </nav>
    );
  }
}
