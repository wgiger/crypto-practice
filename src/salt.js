const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

const fakeUserDb = []

function signup({email, password}) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');
    const user = {email, password: `${salt}:${hashedPassword}`};
    fakeUserDb.push(user)
}

function login({email, password}) {
    const user = fakeUserDb.find(u => u.email === email);

    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer)

    return match ? 'login success!' : 'login failed!';
}

const newUser = {
    email: 'billybobjoe@fake.com',
    password: 'password123'
}

signup(newUser);
console.log(login(newUser))
console.log(login({...newUser, password: 'something wrong'}))




