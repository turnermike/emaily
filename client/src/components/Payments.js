import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
// import { connect } from 'react-redux';

/**
 * amount: 500 US cents = $5
 * token: a callback function that gets called with the token we recieve from Stripe
 *
 */

class Payments extends Component {

    render() {

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