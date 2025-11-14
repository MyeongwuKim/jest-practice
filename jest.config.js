export default {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true, // 🔥 TSX 변환 필수
          },
          transform: {
            react: {
              runtime: "automatic", // 🔥 JSX → React 변환 필수
              development: false,
            },
          },
        },
      },
    ],
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
