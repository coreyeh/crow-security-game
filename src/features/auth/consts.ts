export { schemaAttributes } from './lib/schema-attributes';

export { 
  registerSchema,
  loginSchema,
  verifySchema,
  recoverRequestSchema,
  recoverSubmitSchema,
} from './model/auth-schemas';
export { authProviders } from './model/auth-providers';

export { 
  handleSignUp, 
  handleSignIn, 
  handleResendSignUp,
  handleRecoverRequest,
  handleRecoverSubmit,
  handleVerifyEmail,
} from './api/auth-handlers';