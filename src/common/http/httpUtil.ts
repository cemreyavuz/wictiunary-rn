import { BASE_PATH } from '@env';

import { AuthApi, Configuration } from '../api/generated';

console.log(BASE_PATH);

const config = new Configuration({ basePath: BASE_PATH });

export const authApi = new AuthApi(config);
