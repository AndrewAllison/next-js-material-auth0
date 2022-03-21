require('dotenv').config();

const {
    DATABASE_URL,
    AUTH0_CLIENT_ID,
    AUTH0_CLIENT_SECRET,
    AUTH0_DOMAIN,
    AUTH0_SCOPE,
    AUTH0_COOKIE,
    BACKEND_ADDRESS,
} = process.env;

module.exports = {
    database: {
        url: DATABASE_URL,
    },
    publicRuntimeConfig: {
        BACKEND_URL: `${BACKEND_ADDRESS}/api/graphql`
    },
    serverRuntimeConfig: {
        auth: {
            domain: AUTH0_DOMAIN,
            clientId: AUTH0_CLIENT_ID,
            clientSecret: AUTH0_CLIENT_SECRET,
            scope: AUTH0_SCOPE,
            secret: AUTH0_COOKIE,
            routes: {
                callback: `${BACKEND_ADDRESS}/api/callback`,
                postLogoutRedirectUri: `${BACKEND_ADDRESS}/`
            },
            authorizationParams: {
                scope: 'openid profile email',
                audience: 'MY_AUDIENCE'
            },
        },
    }
}
