import set from "lodash/set";
import each from "lodash/each";

import createAxiosClient from "./create-axios-client";

class Http {
  constructor() {
    each(["options", "head", "get", "delete"], (method) =>
      set(Http.prototype, method, (url, options) => {
        const client = createAxiosClient();
        url = `${this.resource}/${url}`;

        return client.request({ method, url, ...options });
      })
    );

    each(["post", "put", "patch"], (method) =>
      set(Http.prototype, method, (url, data, options) => {
        const client = createAxiosClient();
        url = `${this.resource}/${url}`;
        return client.request({ method, url, data, ...options });
      })
    );
  }

  get resource() {
    return "";
  }
}

export default Http;
