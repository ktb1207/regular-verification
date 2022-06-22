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
/**
 * @description 是否中文
 *
 * @export
 * @param {*} str
 * @return {*}
 */
export function onlyChineseCode(str) {
  const chineseReg = /^[\u4e00-\u9fa5]$/g;
  return typeof str === 'string' ? chineseReg.test(str) : false;
}
