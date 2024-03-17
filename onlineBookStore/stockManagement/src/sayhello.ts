// TSの仕様として、関数の返り値は使用しない場合はそれを受け取るための変数を上位ルーチンで定義しなくていいが、関数自体は返り値なしとして定義・実装は可能
export const sayhello = (name: string): string => {
  const res = `Hello ${name}!`;
  console.log(res);
  return res;
};

// TSではある変数に格納する必要なければ記述する必要はなく。返り値はそのまま棄却される
sayhello("World");
