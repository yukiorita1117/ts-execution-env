// アサーション
// 開発者が価の型について知っているケースでの使用

// 一つ目のアサーション構文
// someValueはstring型だが、そのlength はnumber型だよっとアサーションしている。
// JSXにおいてこの＜＞を用いたアサーションは非推奨。だけど割と使われている。
const someValue: string = "これは文字列です";
let stringLength: number = (<string>someValue).length;
console.log(String(stringLength));

let someValue2: any = "これは文字列です";
let stringLength2: number = someValue2.length;
console.log("not assersion : ", stringLength2);

// 二つ目のアサーション構文
const hogeString: any = "ほげ";
const hogeStringLength: number = (hogeString as string).length;
console.log("hogeStringLength : ", hogeStringLength);

// TODO
const tmp: number = 1;
// number型が標準出力できない？ MDNではできるのに何でこっちでできない？
console.log("ああああ", typeof tmp);
console.log("いいいい", tmp);
