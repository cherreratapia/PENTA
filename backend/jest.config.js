module.exports = {
    "roots": [
      "<rootDir>/spec"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|js)",
      "**/?(*.)+(spec|test).+(ts|js)"
    ],
    "transform": {
      "^.+\\.(ts)$": "ts-jest"
    },
  }