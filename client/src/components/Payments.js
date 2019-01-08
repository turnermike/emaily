// Stripe checkout component
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

/**
 * amount: 500 US cents = $5
 * token: a callback function that gets called with the token we recieve from Stripe
 *
 */

class Payments extends Component {
  render() {
    // console.log('hit Payments.js render()');
    console.log('Key', process.env.REACT_APP_STRIPE_KEY);
    // debugger;

    return (
      <StripeCheckout
        name="Emaily"
        description="$5 for 5 Email Credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        // token={token => console.log('stripe token: ', token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

// export default Payments;
export default connect(null, actions)(Payments);
