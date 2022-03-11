let REGISTRATION_URL = 'http://localhost:8080/api/registration';

if (process.env.NODE_ENV === 'production') {
    REGISTRATION_URL = 'http://api:8080/api/registration';
}

export {REGISTRATION_URL};