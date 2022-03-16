const router = require('express').Router();
const knexConfig = process.env.NODE_ENV.trim() !== "production" ? require("../knexfile").development : require("../knexfile").development;
const knex = require('knex')(knexConfig);
const {RegistrationRepo} = require("../repository");
const {RegistrationService} = require("../services");
const {RegistrationController} = require("../controllers");

const registrationController = new RegistrationController(new RegistrationService(new RegistrationRepo(knex)));
const findALLRegistration = registrationController.findALLRegistration;
const createRegistration = registrationController.createRegistration;

router.get("/", findALLRegistration.bind(registrationController));
router.post("/", createRegistration.bind(registrationController));

module.exports = router;