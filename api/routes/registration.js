const router = require('express').Router();
const {RegistrationService} = require("../services");
const {RegistrationController} = require("../controllers");

const registrationController = new RegistrationController(new RegistrationService());
const findALLRegistration = registrationController.findALLRegistration;

router.get("/", findALLRegistration.bind(registrationController));

module.exports = router;