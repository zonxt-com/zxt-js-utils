import * as CryptoJs from "crypto-js";

export const md5 = (str: string): string => {
  return CryptoJs.MD5(str).toString();
};
