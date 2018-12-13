import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { connect } from 'react-redux';

/**
 * amount: 500 US cents = $5
 * token: a callback function that gets called with the token we recieve from Stripe
 *
 */

console.log('process.env.REACT_APP_STRIPE_KEY', process.env.REACT_APP_STRIPE_KEY);

class Payments extends Component {

    render() {

        // console.log('hit Payments.js render()');

        // debugger;

        return (
            <StripeCheckout
                amount={500}
                token={token => console.log(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            />
        );
    }
}

export default Payments;
// export default connect(mapStateToProps)(Payments);