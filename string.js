/*
 * @Author: luckydog
 * @Date: 2021-09-25 18:32:08
 * @LastEditTime: 2022-02-14 19:59:38
 * @Description:
 * @FilePath: /eg/string.js
 */
// let str = "1China.";
// let pos1 = str.indexOf("China");
// let pos2 = str.lastIndexOf('China')
// console.log(pos1, pos2)

// var str = "The full name of China is the People's Republic of China.";
// var pos = str.search("The");
// console.log(pos)

// 提取部分字符串

// slice不会改变原字符串
// var str = "Apple, Banana, Mango";
// var res = str.slice(7, 13);
// console.log(str, '-=--=-=', res)

// substring 无法接受负的索引
// var str = "Apple, Banana, Mango";
// var res = str.substring(7, 13);
// console.log(str, '=-=-=', res)

// substr
// var str = "Apple, Banana, Mango";
// var res = str.substr(7, 6);
// console.log(str, '=-=-', res)

// replace 不会改变原字符串
// str = "Please visit Microsoft and Microsoft!";
// var n = str.replace(/Microsoft/g, "W3School");
// console.log(str, n)

// toUpperCase toLowerCase
// var text1 = "Hello World!"; // 字符串
// var text2 = text1.toUpperCase(); // text2 是被转换为大写的 text1
// var text3 = text2.toLowerCase()
// console.log(text1, text2, text3)

// concat
// var text1 = "Hello";
// var text2 = "World";
// text3 = text1.concat(" + ", text2);
// console.log(text3)

// trim 不支持ie8
// var str = '   hello world  '
// var res = str.trim()
// console.log(str, res)

// charAt
// charAt() 方法返回字符串中指定下标（位置）的字符串：
// var str = "HELLO WORLD";
// var res = str.charAt(0); // 返回 H
// console.log(str, res)

// charCodeAt() 方法
// charCodeAt() 方法返回字符串中指定索引的字符 unicode 编码：
// var str = "HELLO WORLD";
// console.log(str.charCodeAt(0)) // 返回 72

// 使用属性访问有点不太靠谱：
// 不适用 Internet Explorer 7 或更早的版本
// 它让字符串看起来像是数组（其实并不是）
// 如果找不到字符，[ ] 返回 undefined，而 charAt() 返回空字符串。
// 它是只读的。str[0] = "A" 不会产生错误（但也不会工作！）
// var str = "HELLO WORLD";
// str[0] = "A"; // 不产生错误，但不会工作
// str[0]; // 返回 H
// console.log(str[0])

// var txt = "a,b,c,d,e"; // 字符串
// var res = txt.split(","); // 用逗号分隔
// console.log(res)
// var res = txt.split(" "); // 用空格分隔
// console.log(res)
// var res = txt.split("|"); // 用竖线分隔
// console.log(res)
