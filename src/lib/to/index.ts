/**
 * to camel case
 * @param {string} str
 * @returns {string} camel case str
 */
export const toCamelCase = (str: string) => {
  const s =
    str &&
    (str as any)
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x: any) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

/**
 * 转decimal
 * @param {number} value
 * @param {number} num 保留位数
 * @returns
 */
export const toDecimal = (value: number, num = 2): string => {
  return new Number(value).toFixed(num);
};

/**
 * 转json对象
 * @param value 字符串数组
 */
export const toJsonObject = (value: string[]) => {
  let obj = {};
  value.forEach((x) => {
    obj[x] = x;
  });
  return obj;
};

/**
 * to snake case
 * @param {string} str
 * @returns {string} snake case str
 */
export const toSnakeCase = (str: string) => {
  if (!str) return "";

  return String(str)
    .replace(/^[^A-Za-z0-9]*|[^A-Za-z0-9]*$/g, "")
    .replace(/([a-z])([A-Z])/g, (m, a, b) => a + "_" + b.toLowerCase())
    .replace(/[^A-Za-z0-9]+|_+/g, "_")
    .toLowerCase();
};

/**
 * to tree array
 * @param arr
 * @param idKey
 * @param pidKey
 * @param childrenKey
 */
export const toTreeArray = (
  arr: any[],
  idKey: string = "id",
  pidKey: string = "parentId",
  childrenKey: string = "children"
): any[] => {
  const result: any[] = [];

  if (!Array.isArray(arr)) {
    throw new Error("to tree array error: arr is not a array data!");
  }

  let map = {};
  arr.forEach((item) => {
    map[item[idKey]] = item;
  });
  arr.forEach((item) => {
    const pItem = map[item[pidKey]];
    if (pItem) {
      pItem[childrenKey] = pItem[childrenKey] || [];
      (pItem[childrenKey] as any).push(item);
    } else {
      result.push(item);
    }
  });

  return result;
};
