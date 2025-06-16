const fs = require('fs');

test('index.html exists', () => {
  expect(fs.existsSync('public/index.html')).toBe(true);
});
