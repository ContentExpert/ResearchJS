const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html); // <ul><li>1</li><li>2</li><li>3</li></ul>