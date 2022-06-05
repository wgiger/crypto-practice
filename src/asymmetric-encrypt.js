const {publicEncrypt, privateDecrypt} = require('crypto');
const {publicKey, privateKey} = require('./keypair');

const message = 'the building is on fire! 🔥';

const encryptedData = publicEncrypt(publicKey, Buffer.from(message));

console.log('encrypted data:', encryptedData.toString('hex'));

const decryptedData = privateDecrypt(privateKey, encryptedData);

console.log('decrypted data:', decryptedData.toString('utf-8'))







