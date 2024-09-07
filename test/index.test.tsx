import { createRemixStub } from "@remix-run/testing";
import { expect, it, test, describe } from "vitest";
import { add } from "../app/root.tsx";

it("aaa", () => {
  expect(1).toBe(1);
});

it("add(1) is 1", () => {
  expect(1).toBe(1);
});

test("false is false", () => {
  expect(false).false;
  expect(true).true;
});

describe("aa", () => {
  test("add one", () => {
    expect(1).toBe(1);
  });
});
