let asString: string;

asString = "ほげ";

// 宣言すみの型を割り当てれる。
// 型クエリーと呼ばれるもの 型キャプチャーを取得でき、その型を取得できる
const value: typeof asString = "ああああ";

// 以下はerrorになる
// const error: typeof asString = 0;

// もちろんobjectも同様にできる
let myObject = { hoge: "hoge" };

// myObjectの型を型推論している
let tmpObj: typeof myObject = { hoge: "" };

tmpObj["hoge"] = "fuga";
console.log(tmpObj); //{ hoge: 'fuga' }
