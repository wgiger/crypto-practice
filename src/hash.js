const {createHash} = require('crypto');


function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}
let password = 'hello world!';
const hash1 = hash(password)
password = 'hello world';
const hash2 = hash(password);

console.log(hash1 === hash2 ? '✅ password matches' : '❌ does not match')