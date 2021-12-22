import moment from "moment";
import { isNullOrUnDef } from "../is";

/**
 * 时间格式化
 * @param { date | string } date 日期时间
 * @param { string } format 格式化 不传值时默认格为 YYYY-MM-DD HH:mm:ss
 * @returns
 */
export const timeFormat = (
  date: Date | string | undefined,
  format: string = "YYYY-MM-DD HH:mm:ss",
  options?: { utcOffset?: number }
): string => {
  if (isNullOrUnDef(date)) {
    return undefined as any;
  }
  options = options || {};
  const { utcOffset } = options;
  return moment(date)
    .utcOffset(utcOffset || 0)
    .format(format);
};

/**
 * 获取时间戳
 * @param str datetime时间字符串
 * @returns 时间戳
 */
export const getTimestamp = (str?: string | undefined): string => {
  str = str || new Date().toString();
  const timestamp = new Date(str).getTime();
  return timestamp.toString();
};

/**
 * 获取当年第一天
 * @param date {Date ｜ undefind} 日期 不传默认为当天
 * @returns Date 当年第一天
 */
export const getFirstDayOfYear = (date?: Date | undefined): Date => {
  date = date || new Date();
  date.setMonth(0);
  date.setDate(1);
  return date;
};
