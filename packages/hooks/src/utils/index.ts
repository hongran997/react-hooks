export const isString = (value: unknown) => {
  return typeof value === 'string';
};
export const isBoolean = (value: unknown) => {
  return typeof value === 'boolean';
};
export const isNumber = (value: unknown) => {
  return typeof value === 'number';
};
export const isUndef = (value: unknown) => {
  typeof value === 'undefined';
};
export const isObject = (value: unknown) => {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
};
export const isFunction = (value: unknown) => {
  return typeof value === 'function';
};
