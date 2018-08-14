/**
 *
 * Popup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './styles.css';

class Popup extends React.Component {

  state = {
    isTimeout: false,
  };
  closePopup() {
    this.timeout = setTimeout(() => {
      this.setState({ isTimeout: true });
      this.props.history.push({ pathname: '/success' });
    }, 2000);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    const { children, showPopup } = this.props;
    if (showPopup) {
      this.closePopup();
      return (
        <div className="backdrop">
          <div className="content">{children}</div>
        </div>
      );
    }
    if (this.state.isTimeout) {
      return null;
    }
    return null;
  }
}

Popup.propTypes = {
  children: PropTypes.object,
  showPopup: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(Popup);
