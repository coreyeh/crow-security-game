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
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),
        attributeMapping: {
          email: 'email',
          preferredUsername: 'sub'
        },
        scopes: ['email', 'profile'],
      },
      loginWithAmazon: {
        clientId: secret('AMAZON_CLIENT_ID'),
        clientSecret: secret('AMAZON_CLIENT_SECRET'),
        attributeMapping: {
          email: 'email',
          preferredUsername: 'user_id',
        },
        scopes: ['profile'],
      },
      callbackUrls: ['http://localhost:5173/'],
      logoutUrls: ['http://localhost:5173/',]
    },
  },
  userAttributes: {
    email: {
      mutable: true,
      required: true,
    },
    preferredUsername: {
      mutable: true,
      required: true,
    },
  },
});
