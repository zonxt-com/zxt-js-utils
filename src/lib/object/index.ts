/**
 * 深拷贝对象
 * @param obj
 * @returns
 */
export const deepCopy = (obj: Object): Object => {
  return JSON.parse(JSON.stringify(obj));
};
