import {} from "@kyvg/vue3-notification";
import { get, set, map, keys, reduce, defaults, merge } from "lodash";
const ResponseHandler = {
  handle: (res) => {
    console.log(res);
    const defaultRes = { type: "success", message: "Başarılı" };
    const result = defaults(res, defaultRes);
    result.text = result.message;
    notify(result);
  },

  error: (e, formValidate) => {
    let errorMessage, errors, errorKeys;
    if (process.env.NODE_ENV === "development") {
      console.error(e);
    }
    if (get(e, "data")) {
      if (get(e, "data.errors")) {
        errors = get(e, "data.errors");
        errorKeys = keys(errors);
        if (formValidate) {
          const formErrors = reduce(
            errorKeys,
            (acc, key) => {
              set(acc, key, errors[key][0]);
              return acc;
            },
            {}
          );
          merge(formValidate.errors, formErrors);
        }
        if (errorKeys.length > 0) {
          errorMessage = `<ul class="list-unstyled mb-0 d-flex flex-column gap-2">
                 ${map(errorKeys, (key) => `<li>${errors[key]}</li>`).join("")}
              </ul>`;
        }
      } else {
        errorMessage = get(e, "data.message") || "Hata";
      }
    } else {
      errorMessage = e || e.message || "Hata";
    }
    notify({
      text: errorMessage,
      type: "error",
    });
  },
};

export default ResponseHandler;
