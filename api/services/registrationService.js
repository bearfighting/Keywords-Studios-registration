class RegistrationService {
    constructor(repo) {
        this._repo = repo;
    }

    async findAll() {
        return "findAll is ok";
    }

    async create(registration) {
        return "create is ok";
    }
}

module.exports = RegistrationService;