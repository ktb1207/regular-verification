import { isTel } from '../dist/index.mjs';

const telDom = document.getElementById('tel');
const testTel = 125897456120;

telDom.innerText = `${testTel}是否是一个手机号：${isTel(testTel)}`;
