import * as envVar from 'env-var'

export type ENVIRONMENT_TYPE = 'staging' | 'production' | 'development' | 'test'
export const ENVIRONMENT: ENVIRONMENT_TYPE = envVar
  .get('NODE_ENV')
  .default('development')
  .required()
  .asEnum(['development', 'staging', 'production', 'test'])
export const isDevelopment = ENVIRONMENT === 'development'
export const isTest = ENVIRONMENT === 'test'
