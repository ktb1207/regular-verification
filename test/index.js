import { isTel } from '../dist/index.mjs';

const telDom = document.getElementById('tel');
const testTel = 125897456120;

telDom.innerText = `${testTel}是否是一个手机号：${isTel(testTel)}`;

// /abc/g 字符串必须包含 abc 整体字符
// /^abc/g 字符串必须以 abc 整体作为开始

// /[abc]/g 字符串只要包含a,b,c其中之一即可
// /[^abc]/g 字符串只要包含除 a,b,c之外任一个字符即可

// /abc$/g 字符串必须以 abc 作为整体结尾
// /[abc]$/g 字符串只要以a,b,c任意之一结尾即可

// /abc{2}/g 字符串必须包含 abcc即可
// /[abc]{2}/g; 字符串a,b,c任意一个出现2次即可

// /(ab)|(cd)/g; ab或cd为整体，出现一次即可

// const myReg = /^[a-zA-Z][a-zA-Z]*\d+[~!@#\$%\^&\*\(\)_\+-=<>\?,\.\/\|]+{6,18}$/g;
const myReg = /ABC/g;

console.log(myReg.test('aA12@3'));
