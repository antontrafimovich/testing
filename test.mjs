import { errorLog, successLog } from "./logger.mjs";

export const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
};

export const spyOn = (object, prop) => {
  const prevFn = object[prop];

  Object.defineProperty(object[prop], "mockImplementation", {
    value: (newFn) => {
      Object.defineProperty(object, prop, {
        value: fn(newFn),
      });

      return () => {
        Object.defineProperty(object, prop, {
          value: prevFn,
        });
      };
    },
  });
};

export const fn = (impl) => {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args);
    return impl(...args);
  };

  mockFn.mock = { calls: [] };
  return mockFn;
};

export const test = async (title, callback) => {
  try {
    await callback();
    successLog(`${title}`);
  } catch (err) {
    errorLog(`${title}`);
    console.error(err);
  }
};
