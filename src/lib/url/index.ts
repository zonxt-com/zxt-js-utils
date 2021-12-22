import { UrlParser } from "url-params-parser";

export const parseUrlParams = (url: string) => {
  const urlParser = UrlParser(url);
  return urlParser.queryParams;
};

export const parseUrlParamsValue = (url: string, key: string) => {
  const params = parseUrlParams(url);
  return params[key];
};
