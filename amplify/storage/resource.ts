import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'crowDevStorage',
  isDefault: true,
})