
import type { Schema } from '@@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

/**
 * This module provides a pre-configured instance of the Amplify Data client.
 *
 * Do not import generateClient directly in your features or entities.
 * Instead, use this exported `client` instance to ensure consistent configuration
 * and avoid duplication of client logic across the codebase.
 */
export const amplifyClient = generateClient<Schema>();