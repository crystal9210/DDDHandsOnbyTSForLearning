// jest:jsのテストフレームワーク、jsプロジェクト全般で幅広く使用される、設定の簡易さ、テストの実行速度、特にスナップショットテスト機能などが支持されている理由となっている
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest", // jestにts-jestプリセットを使用することを指定；ts-jest:tsを使用したプロジェクトのテストを容易にするためのjestのプリセット、tsのコンパイル、ソースマップのサポートを提供→これによりjestが直接tsファイルを扱えるようになる
  testEnvironment: "node", // テスト実行環境としてnode.jsランタイムを指定、サーバサイド、DOMに依存しないフロントエンドのコードのテストに使用
  moduleDirectories: ["node_modules", "src"], // モジュールのシンボルパスを解決する際に参照するディレクトリのリストを指定
  transformIgnorePatterns: ["/node_modules"], //  トランスフォーム（変換）の対象から除外するパターンの指定；ここではnode_modulesディレクトリ内のファイルをトランスフォームの対象から除外しているが、これは通常node_modules内のファイルは既にコンパイルされているため、テスト時に再度トランスフォームする必要はないことによる
};
