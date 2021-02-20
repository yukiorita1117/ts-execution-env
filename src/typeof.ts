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

// --------------------------------------------------------------------------------

// keyof
// プロパティの名称を取得できる

type SomeType = {
  name: string;
  id: number;
  isOn: boolean;
};

let someKey: SomeType;
// 以下だと name isOn がないと怒られる。
// someKey = { id: 100 };

// keyofを使って見ると...

let someKey2: keyof SomeType;

someKey2 = "id";
console.log("someKey2: ", someKey2); // id

// typeof と keyofを組み合わせることによって
// 型推論をする場面で有効。

let tmpOrita = {
  name: "jhcoder",
  id: 100,
};

let tmpKey: keyof typeof tmpOrita;
tmpKey = "id";
// tmpKey = "address"; //これはerrorになる
