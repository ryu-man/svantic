module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester"
  },
  moduleFileExtensions: ['js', 'svelte'],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}