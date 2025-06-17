module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["vue", "js", "ts", "json"],
  testMatch: ["**/__tests__/**/*.spec.[jt]s"],
};
