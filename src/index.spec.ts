import { test, expect } from "vitest";
import { parseArgs } from ".";
// 需求分析
// -l -p 8080 -d /user/logs
// 任务拆分 tesking
// -l -> true

test("todo 1", () => {
  const options = {
    l: Boolean,
  };
  const args = parseArgs(options, ["-l"]);
  expect(args).toEqual({
    l: true,
  });
});
// -p -> 8080
test("todo 2", () => {
  const options = {
    p: Number,
  };
  const args = parseArgs(options, ["-p", 8080]);
  expect(args).toEqual({
    p: 8080,
  });
});
// -d /user/logs

test("todo 3", () => {
  const options = {
    d: String,
  };
  const args = parseArgs(options, ["-d", "/user/logs"]);
  expect(args).toEqual({
    d: "/user/logs",
  });
});
test("happy path", () => {
  const options = {
    l: Boolean,
    p: Number,
    d: String,
  };
  const args = parseArgs(options, ["-l", "-p", "8080", "-d", "/user/logs"]);
  expect(args).toEqual({
    l: true,
    p: 8080,
    d: "/user/logs",
  });
});
