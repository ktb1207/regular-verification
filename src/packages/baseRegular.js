/*
 * @Author: kongtb
 * @Date: 2022-06-19 22:45:58
 * @Last Modified by: kongtb
 * @Last Modified time: 2022-07-20 10:09:05
 */

/**
 *
 * @description 手机号
 * @export
 * @param {string} num
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
 * @description 固定电话 010-68865412 0371-98654123 4008809456
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isFixedPhone(str) {
  const fixedPhoneReg = /(^\d{3,4}-\d{8}$)|(^400\d{7}$)/g;
  return typeof str === 'string' ? fixedPhoneReg.test(str) : false;
}

/**
 * @description 身份证号 15或18位，18位末尾很可能包含x
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isIdentityCode(str) {
  const identityReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/g;
  return typeof str === 'string' ? identityReg.test(str) : false;
}

/**
 * @description 国内邮政编码
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isPostalCode(str) {
  const postalReg = /^[1-9]\d{5}$/g;
  return typeof str === 'string' ? postalReg.test(str) : false;
}

/**
 * @description 日期 年-月-日格式
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isDateCode(str) {
  const dateReg = /^\d{4}-(([0-1]?\d{1})|(3[0-1]))-(([0-2]?\d{1})|(3[0-1]))$/g;
  return typeof str === 'string' ? dateReg.test(str) : false;
}

/**
 * @description 合法账号 字母开头，数字字母下划线长度6-18
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isUserAccountCode(str) {
  const accountReg = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/g;
  return typeof str === 'string' ? accountReg.test(str) : false;
}

/**
 * @description 弱密码 字母开头，数字字母下划线组合6-18
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isWeakPassword(str) {
  const weakReg = /^[a-zA-Z]\w{5,17}$/g;
  return typeof str === 'string' ? weakReg.test(str) : false;
}

/**
 * @description 强密码 必须包含大写字母，小写字母，数字，特殊符号，长度8位以上
 *
 * @export
 * @param {string} str
 * @return {boolean}
 */
export function isStrongPassword(str) {
  const strongReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`~!@#\$%\^&\*\(\)\-_\+=]).{8,}$/g;
  return typeof str === 'string' ? strongReg.test(str) : false;
}
