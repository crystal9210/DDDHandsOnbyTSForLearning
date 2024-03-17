import { sayhello } from "./sayhello";

test("sayHello", () => {
  expect(sayhello("World")).toBe("Hello World!");
});
