class RegistrationController {
    constructor(service) {
        this._service = service;
    }

    async findALLRegistration(req, res) {
        const registrations = await this._service.findAll();
        if (registrations) {
            res.send(registrations);
        } else {
            res.sendStatus(404);
        }
    }

    async createRegistration(req, res) {
        const registration = req.body;
        const result = await this._service.create(
            registration
        )
        if (result) {
            res.send(result);
        } else {
            res.sendStatus(404);
        }
    }
}

module.exports = RegistrationController;