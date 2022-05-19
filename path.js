const path = require('path')
console.log(path.sep)

const filepath = path.join('/content', 'subfold','text.txt')
console.log(filepath)

const absolute = path.resolve(__dirname,'content','subfold','test.txt')
console.log(absolute)