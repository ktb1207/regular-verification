/*
 * @Author: kongtb
 * @Date: 2022-06-19 22:45:58
 * @Last Modified by: kongtb
 * @Last Modified time: 2022-06-20 23:23:57
 */

/**
 *
 * @description 手机号
 * @export
 * @param {*} num
 * @return {boolean}
 */
export function isTel(num) {
  if (!num) {
    return false;
  }
  if (typeof num !== 'number') {
    return false;
  }
  const reg = /^1[34578]\d{9}$/;
  return reg.test(num);
}

/**
 *
 * @description 仅允许小写字母
 * @export
 * @param {*} str
 * @return {boolean}
 */
export function onlySmallLetter(str) {
  // ^ 限制只能以小写字母开头
  // [a-z] 小写字母 a-z
  // [a-z]+ 小写字母1次或多次
  // [a-z]+$小写字母1次或多次并且限制小写字母结尾
  const smallLetterReg = /^[a-z]+$/g;
  return typeof str === 'string' ? smallLetterReg.test(str) : false;
}

/**
 *
 * @description 仅允许大写字母
 * @export
 * @param {*} str
 * @return {*}
 */
export function onlyBigLetter(str) {
  const bigLetterReg = /^[A-Z]+$/g;
  return typeof str === 'string' ? bigLetterReg.test(str) : false;
}

/**
 *
 * @description 仅允许数字，并且非0开头
 * @export
 * @param {*} str
 * @return {*}
 */
export function onlyNumberLetter(str) {
  const numberLeterReg = /^[1-9]\d*$/g;
  return typeof str === 'string' ? numberLeterReg.test(str) : false;
}

/**
 * @description 限制数字1-999
 *
 * @export
 * @param {*} str
 * @return {*}
 */
export function limitNumberOneToThousand(str) {
  const onToThousandReg = /^[1-9]\d{0,1}\d?$/g;
  return typeof str === 'string' ? onToThousandReg.test(str) : false;
}
