const fs = require('fs');
const book = JSON.parse(fs.readFileSync('html/book.json', 'utf8'));

book.chapters.forEach(filename => {
  const path = 'html/' + filename;
  const text = fs.readFileSync(path, 'utf8');
  fs.writeFileSync(path, text
    .replace(/(<table[^>]*>)/g, '<div class="table-wrapper">$1')
    .replace(/(<\/table>)/g, '$1</div>'));
});

console.log('Filters applied…');
