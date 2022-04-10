/*
 * const,letの変数宣言
 */

// var var1 = "var変数";
// console.log(var1);

// // var変数は上書き可能
// var1 = "変数上書き";
// console.log(var1);

// // var変数は再宣言可能
// var var1= "再宣言";
// console.log(var1);

// let var2 = "let";
// console.log(var2);

// //letは上書き可能
// var2 = "relet";
// console.log(var2);

// //letは再宣言不可
// let var2 = "relet";
// console.log(var2);

// const val3 = "const変数";
// console.log(val3);

//constは上書き不可
//val3= "上書き";

// const val3 = "const再宣言";

// //constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"かめ",
//   age:27
// }
// val4.name = "tar";
// val4.address = "埼玉"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/*template文字列*/
// const name = "かめ";
// const age = "27";

// //「私の名前はかめです。年齢は27です。」

// //従来
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// //template文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//アロー関数
//従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// //アロー関数
// //引数部分はかっこ省略可
// const func2 = (str) => {
//   return str;
// };
// //以下の記法もある
// const func2_1 = (str) => str;

// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(1, 2));
/**
 * 分割代入
 */
// const myProfile = {
//   name: "かめ",
//   age: 27
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["かめ", 27];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前字は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello("かめ");

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// //配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// //スプレッド構文では元の配列に影響しない
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//=で定義すると元の配列にも影響してしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
//const nameArr = ["田中", "山田", "かめ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(`${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "かめ") {
//     return name;
//   } else {
//     return `${name} さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
