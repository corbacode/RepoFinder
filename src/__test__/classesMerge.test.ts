import { describe, expect, test } from "vitest";
import cm from "@/utils/classesMerge";

describe("cm function", () => {
  test("should return the base class name if no addition is provided", () => {
    const baseClass = "my-class";
    const result = cm(baseClass, null);
    expect(result).toBe(baseClass);
  });

  test("should combine base and addition classes with a space separator", () => {
    const baseClass = "button";
    const additionClass = "primary";
    const expectedResult = `${baseClass} ${additionClass}`;
    const result = cm(baseClass, additionClass);
    expect(result).toBe(expectedResult);
  });

  test("should handle empty string addition as if it were null", () => {
    const baseClass = "error";
    const emptyAddition = "";
    const result = cm(baseClass, emptyAddition);
    expect(result).toBe(baseClass);
  });
});
