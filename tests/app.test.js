import { describe, expect, it, beforeAll } from "vitest";
import { JSDOM } from "jsdom";
import { add, reset, decrease } from "../src/js/counter";

describe("counter test", () => {
  let dom;

  beforeAll(async () => {
    dom = await JSDOM.fromFile("./index.html", { runScripts: "dangerously" });
    global.document = dom.window.document;
  });
  
  it("should init to 0", () => {
    expect(document.getElementById("number").innerHTML).toBe("0");
  });
  it("should increment to 1", async () => {
    add()
    expect(document.getElementById("number").innerHTML).toBe("1");
  });
  it("should reinit to 0", () => {
    const counter = document.getElementById("number");
    counter.innerHTML = 1;
    reset();
    expect(document.getElementById("number").innerHTML).toBe("0");
  });
  it("should decrese in 1", () => {
    const counter = document.getElementById("number");
    counter.innerHTML = 1;
    decrease();
    expect(document.getElementById("number").innerHTML).toBe("0");
  });
  it("should not get negative numbers", () => {
    decrease();
    expect(document.getElementById("number").innerHTML).toBe("0");
  })
});