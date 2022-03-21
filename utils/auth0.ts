import { initAuth0 } from '@auth0/nextjs-auth0';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const { auth }= serverRuntimeConfig;
export default initAuth0({
  ...auth,
  clockTolerance: 10000,
  httpTimeout: 2500,
  session:  {
    rollingDuration: 60 * 60 * 24,
    absoluteDuration: 60 * 60 * 24 * 7
  },
});