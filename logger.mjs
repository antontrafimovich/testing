export const successLog = (message) => {
  console.log("\x1b[32m%s\x1b[0m", message);
};

export const errorLog = (message) => {
  console.log("\x1b[31m%s\x1b[0m", message);
};
