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
