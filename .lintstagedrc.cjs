const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `yarn f run next lint --fix --file ${filenames
    .map((f) => {
      console.log(path.relative(process.cwd(), f));
      return path.relative(process.cwd(), f)
    })
    .join(' --file ')}`

module.exports = {
  "./api/**/*.{ts,tsx}": "yarn a lint",
  "./apispec/**/*.{ts,tsx}": "yarn as lint",
  "./components/**/*.{ts,tsx}": "yarn c lint",
  "./frontend/**/*.{ts,tsx}": [buildEslintCommand],
}