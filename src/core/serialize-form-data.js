import each from 'lodash/each';

const serializeFormData = (obj, form, namespace) => {
  let fd = form || new FormData();
  let formKey;

  each(obj, (value, key) => {
    if (namespace) {
      formKey = namespace + '[' + key + ']';
    } else {
      formKey = key;
    }

    if (value instanceof Date) {
      fd.append(formKey, value.toISOString());
    } else if (typeof value === 'boolean') {
      value = value ? '1' : '0';
      fd.append(formKey, value);
    } else if (typeof value === 'object' && !(value instanceof File)) {
      serializeFormData(value, fd, formKey);
    } else {
      fd.append(formKey, value);
    }
  });

  return fd;
};

export default serializeFormData;
