const personName: string = "jhcoder";

console.log(`Hello ${personName}!`);

// 引数や返値に型注釈（アノテーション）を必ずつけるべき
export function Person(name: string): string {
  return `Hello ${name}`;
}

export function Tuple1() {
  const tmpArray: [string, number] = ["あああ", 10];
  return tmpArray;
}

export function Tuple2() {
  const tmpArray: [string, number] = ["あああ", 10];
  console.log("テスト", tmpArray[0].substr(1)); // ああ
  console.log("テスト", tmpArray[0].substr(2)); // あ
  // console.log("テスト", tmpArray[1].substr(2)); //この場合number型にsubstr()は使えないためerrorとなる

  return tmpArray;
}

// 以下のようなstringとnumberの混じった配列の方はUnion型で定義するといける
export function Union1() {
  let tmpArray: (string | number)[];
  tmpArray = [1, 2, 4, "あああ", 10, "ろく"];
  console.log("ユニオン", tmpArray[3].toString());
  return tmpArray;
}

Tuple2();
Union1();

// unknown型
// anyと異なり、型安全である。代入には寛容だが、以下のように値の利用には厳しい
const probablyNumbers: unknown[] = ["0"];

// Tips: toFixed() メソッドは、数を固定小数点表記を用いて整形します。
// probablyNumbers[0].ToFixed(1); // errorで怒ってくれる
