import React from 'react';
import { Route } from 'react-router-dom';
import auth0Client from '../../utils/Auth';

function SecuredRoute(props) {
    const { component: Component, path } = props;
    return (
        <Route path={path} render={() => {
            if (props.checkingSession) return <h3>Validating session...</h3>;
            if (!auth0Client.isAuthenticated()) {
                auth0Client.signIn();
                return <div></div>;
            }
            return <Component />
        }} />
    );
}

export default SecuredRoute;