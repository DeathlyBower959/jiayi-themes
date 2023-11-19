import fs from 'fs';

console.log('Wassup');

fs.writeFile('./all_themes.json', '{}', err => {
  console.log(err);
});
