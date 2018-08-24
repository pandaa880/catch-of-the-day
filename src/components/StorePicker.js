import React from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func
    })
  };

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter the Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    );
  }
}

export default StorePicker;
