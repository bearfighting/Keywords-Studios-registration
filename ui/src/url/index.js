let REGISTRATION_URL = 'http://localhost:8080/api/registration';

if (process.env.NODE_ENV.trim() === 'production') {
    REGISTRATION_URL = 'http://api:8080/api/registration';
}

export {REGISTRATION_URL};