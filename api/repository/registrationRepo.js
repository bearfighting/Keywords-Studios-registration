class RegistrationRepo {
    constructor(knex) {
        this._knex = knex;
    }

    async findAll() {
        let result = await this._knex.select().from('registration');
        return result;
    }

    async create(registration) {
        let result = await this._knex.insert(registration).into('registration');

        return result;
    }
}

module.exports = RegistrationRepo;