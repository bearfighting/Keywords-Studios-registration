class RegistrationService {
    constructor(repo) {
        this._repo = repo;
    }

    async findAll() {
        let result = await this._repo.findAll();

        return result;
    }

    async create(registration) {
        let result = await this._repo.create(registration);

        return result;
    }
}

module.exports = RegistrationService;