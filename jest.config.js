/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // ✅ TypeScript + JS 전부 Babel로 처리
  },
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.json" }],
  },
  transformIgnorePatterns: [
    "node_modules/(?!msw|@mswjs|@open-draft|until-async)/", // ✅ ESM 패키지 변환 허용
  ],

  testEnvironmentOptions: {
    customExportConditions: ["node", "require", "default"], // ✅ ESM export 조건 맞추기
  },

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // ✅ TS import 경로 안정화
  },
};

export default config;
