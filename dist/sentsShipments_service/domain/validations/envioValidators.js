"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reglasValidacionEnvio = void 0;
const express_validator_1 = require("express-validator");
exports.reglasValidacionEnvio = [
    (0, express_validator_1.check)("user_uuid").isUUID().withMessage("UUID de usuario inválido"),
    (0, express_validator_1.check)("origin").isString().notEmpty().withMessage("Origen es requerido"),
    (0, express_validator_1.check)("destination")
        .isString()
        .notEmpty()
        .withMessage("Destino es requerido"),
    (0, express_validator_1.check)("weight")
        .isFloat({ gt: 0 })
        .withMessage("Peso debe ser un número positivo"),
    (0, express_validator_1.check)("base_price")
        .isFloat({ gt: 0 })
        .withMessage("Precio base debe ser un número positivo"),
    (0, express_validator_1.check)("additional_charge")
        .isFloat({ gt: 0 })
        .withMessage("Cargo adicional debe ser un número positivo"),
    (0, express_validator_1.check)("total_price")
        .isFloat({ gt: 0 })
        .withMessage("Precio total debe ser un número positivo"),
    (0, express_validator_1.check)("status_uuid").isUUID().withMessage("UUID de estado inválido"),
];
