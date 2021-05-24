import React, { PureComponent } from 'react';
import { object } from 'prop-types';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom'
import styles from './styles.scss';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

class Application extends PureComponent {
  static propTypes = {
    children: object
  };

  render() {
    return (
      <div className={styles.application} >
        <Helmet>
          <link rel="shortcut icon" type="image/png" href="/static/images/favicon.png"/>
        </Helmet>
        <NavBar />
        <div className={styles.appChild}>
          {this.props.children}
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(Application);