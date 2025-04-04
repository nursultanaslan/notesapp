import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import {storage} from './storage/resource';

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
/**auth, data ve storage tanımlarını import ettik. */
defineBackend({
  auth,
  data,
  storage,
});
