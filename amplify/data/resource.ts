import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a.model({
    userId: a.id().required(),
    username: a.string().required(),
    email: a.email().required(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    isOnline: a.boolean().default(false),
  })
  .identifier(['userId'])
})
.authorization((allow) => [allow.owner()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});