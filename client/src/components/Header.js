import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with Google</a>
                    </li>
                );
            default:
                return [
                    <li key="1">
                        <Payments />
                    </li>,
                    <li key="3" style={{margin:'0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="2">
                        <a href="/api/logout">Logout</a>
                    </li>,
                ];
        }
    }

    render() {
        // console.log('hit Header.js render()');
        // console.log('this.props', this.props);

        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        Emaily
                    </Link>
                    <ul className="right">{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth }; // if key:value are the same name such as auth:auth, we can just use 'auth'
}

export default connect(mapStateToProps)(Header);
