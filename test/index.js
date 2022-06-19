import { isTel } from '../dist/index.mjs';

const telDom = document.getElementById('tel');
const testTel = 125897456120;

telDom.innerText = `${testTel}是否是一个手机号：${isTel(testTel)}`;

// const myReg = /^[1-9]\d{0,1}\d?$/g;
const myReg = /^[1-9]\d*$/g;

console.log(myReg.test('12456456'));
