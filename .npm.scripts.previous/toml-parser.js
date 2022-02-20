var toml = require('toml');
var concat = require('concat-stream');
var fs = require('fs');

console.log(" value of TOML_FILE_PATH = " + process.env.TOML_FILE_PATH)
fs.createReadStream(process.env.TOML_FILE_PATH, 'utf8').pipe(concat(function(data) {
  var parsed = toml.parse(data);
  console.log(parsed);

  try {
    fs.writeFileSync("./.npm.scripts/hugo.theme.to.json", JSON.stringify(parsed, null, 4), {}); // no options
  } catch(err) {
    console.error(err);
    throw err;
  }
}));
