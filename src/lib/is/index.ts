/**
 * Convert to string function
 */
const toString = Object.prototype.toString;

/**
 * Is the value null
 * @param value
 * @returns {boolean}
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Is the value defined
 * @param value
 * @returns {boolean}
 */
export const isDef = <T = unknown>(value?: T): value is T => {
  return typeof value !== "undefined";
};

/**
 * Is the value undeined
 * @param value
 * @returns {boolean}
 */
export const isUnDef = <T = unknown>(value?: T): value is T => {
  return !isDef(value);
};

/**
 * Is the value null and undefined
 * @param value
 * @returns {boolean}
 */
export function isNullAndUnDef(value: unknown): value is null | undefined {
  return isUnDef(value) && isNull(value);
}

/**
 * Is the value null or undefined
 * @param value
 * @returns {boolean}
 */
export function isNullOrUnDef(value: unknown): value is null | undefined {
  return isUnDef(value) || isNull(value);
}

/**
 * Is the value a type of value str
 * @param value
 * @param type
 * @returns {boolean}
 */
export function is(value: unknown, type: string) {
  return toString.call(value) === `[object ${type}]`;
}

/**
 * Is the value a function
 * @param value
 * @returns {boolean}
 */
export function isFunction<T = () => any>(value: unknown): value is T {
  return is(value, "Function");
}

/**
 * Is the value a object
 * @param value
 * @returns {boolean}
 */
export const isObject = (value: any): value is Record<any, any> => {
  return value !== null && is(value, "Object");
};

/**
 * Is the value a string
 * @param value
 * @returns {boolean}
 */
export function isString(value: unknown): value is string {
  return is(value, "String");
}

/**
 * Is the value boolean
 * @param value
 * @returns {boolean}
 */
export function isBoolean(value: unknown): value is boolean {
  return is(value, "Boolean");
}

/**
 * Is the value array
 * @param value
 * @returns {boolean}
 */
export function isArray(value: any): value is Array<any> {
  return value && Array.isArray(value);
}

/**
 * Is the value date
 * @param value
 * @returns
 */
export function isDate(value: unknown): value is Date {
  return is(value, "Date");
}

/**
 * Is the value null or undeined or string and string empty
 */
export function isNullOrUnDefOrStringEmpty(
  value: unknown
): value is null | undefined | string {
  return (
    isUnDef(value) ||
    isNull(value) ||
    (isString(value) && !((value as string).trim().length > 0))
  );
}
