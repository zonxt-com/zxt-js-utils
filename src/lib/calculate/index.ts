/**
 * 计算字符串像素宽度
 * @param str 要计算的字符串
 * @param fontSize 字体大小
 * @returns {number} 像素宽度
 */
export const calculateStringWidth = (str: string, fontSize: string): number => {
  let width = 0;

  let ele = document.createElement("div");
  ele.style.position = "absolute";
  ele.style.whiteSpace = "nowrap";
  ele.style.fontSize = fontSize;
  ele.style.opacity = "0";
  ele.innerText = str;
  document.body.append(ele);
  width = ele.getBoundingClientRect().width;
  document.body.removeChild(ele);

  return width;
};
