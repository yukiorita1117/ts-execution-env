const personName: string = "jhcoder";

console.log(`Hello ${personName}!`);

// 引数や返値に型注釈（アノテーション）を必ずつけるべき
export function Person(name: string): string {
  return `Hello ${name}`;
}
