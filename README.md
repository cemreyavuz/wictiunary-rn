# Wictiunary React-Native

## Notes

### `swagger-codegen` Problem

As of 21.07.2021, `swagger-codegen` v3.0.27 has a bug for `typescript-fetch` config. In the `api.ts` file, `isomorphic-fetch` package is imported as `import * as isomorphicFetch from "isomorphic-fetch"`. However, it should be `import isomorphicFetch from "isomorphic-fetch"` instead. Until this bug is fixed in later versions, this fix should be done manually each time the api is generated.