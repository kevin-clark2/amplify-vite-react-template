import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET')
      },
      loginWithAmazon: {
        clientId: secret('LOGINWITHAMAZON_CLIENT_ID'),
        clientSecret: secret('LOGINWITHAMAZON_CLIENT_SECRET'),
        scopes: ['email'],
        attributeMapping: {
          email: 'email'
        }
      },
      callbackUrls: [
        'http://localhost:3000/',
        'https://main.d3nw571554b07x.amplifyapp.com/'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://main.d3nw571554b07x.amplifyapp.com/'],
    }
  },
});
