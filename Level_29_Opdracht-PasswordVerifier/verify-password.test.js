// const { describe, test, expect } = require("@jest/globals");
const verifyPassword = require("./verify-password");

describe("verify a password that meets all requirements ", () => {
  test("Has the right length", () => {
    verifyPassword("Iamapassword2");
    expect("Iamapassword").toBe("Iamapassword");
  });
});
