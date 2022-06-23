### 说明

这是一个 JS 正则校验工具类库

### 使用

- npm install regular-verification --save
- 导入

```js
import { isTel } from 'regular-verification';

const testStr = '15836132696';
console.log(isTel(testStr)); // true
```

### API 介绍

> isTel(str)

检测 str 是否为手机号

> isFixedPhone(str)

固定电话 010-68865412 0371-98654123 4008809456

> isIdentityCode(str)

身份证号 15 或 18 位，18 位末尾很可能包含 x

> isPostalCode(str)

国内邮政编码

> isDateCode(str)

日期 年-月-日格式

> isUserAccountCode(str)

合法账号 字母开头，数字字母下划线长度 6-18

> isWeakPassword(str)

弱密码 字母开头，数字字母下划线组合 6-18

> isStrongPassword(str)

强密码 必须包含大写字母，小写字母，数字，特殊符号，长度 8 位以上

---

> onlySmallLetter(str)

仅允许小写字母

> onlyBigLetter(str)

仅允许大写字母

> onlyNumberLetter(str)

仅允许数字，并且非 0 开头

> limitNumberOneToThousand(str)

限制数字 1-999

> onlyChineseCode(str)

仅允许中文
