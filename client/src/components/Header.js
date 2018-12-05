import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent() {

        switch(this.props.auth){
            case null:
                return 'still deciding';
            case false:
                return 'im logged out';
            default:
                return 'im logged in';
        }
    }

    render() {
        console.log('this.props', this.props);

        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Emaily</a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {

    return { auth };    // if key:value are the same name such as auth:auth, we can just use 'auth'

}

export default connect(mapStateToProps)(Header);