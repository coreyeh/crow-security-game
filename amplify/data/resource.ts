import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a.model({
    userId: a.id(),
    owner: a.string()
      .authorization((allow) => [allow.owner().to(['read'])]),

    email: a.string().required(),
    password: a.string().required(),
    username: a.string().required(),

    createdAt: a.datetime()
      .authorization((allow) => [allow.owner().to(['read'])]),
    updatedAt: a.datetime()
      .authorization((allow) => [allow.owner().to(['read'])]),

    isOnline: a.boolean(),
  })
  .identifier(['userId'])
  .authorization((allow) => [allow.owner()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});