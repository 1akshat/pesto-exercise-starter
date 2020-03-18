import { accessorProperties } from "./accessorProperties";

describe("Test 2", () => {

  const obj = accessorProperties();
  obj.number = 5;

  test("should return binary if input is number", () => {
    expect(obj.number).toBe("101");
  });
});

describe("test 1", () => {
  const obj = accessorProperties();
  obj.number = "asdfg";
  test("should return string if input is string", () => {
    expect(obj.number).toBe("asdfg");
  });
});
