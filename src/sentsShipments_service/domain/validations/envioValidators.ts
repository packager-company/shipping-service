import { check } from 'express-validator';

export const reglasValidacionEnvio = [
  check('user_uuid').isUUID().withMessage('UUID de usuario inválido'),
  check('origin').notEmpty().withMessage('Origen es requerido'),
  check('destination').notEmpty().withMessage('Destino es requerido'),
  check('weight').isFloat({ min: 0 }).withMessage('Peso debe ser un número positivo'),
  check('base_price').isFloat({ min: 0 }).withMessage('Precio base debe ser un número positivo'),
  check('additional_charge').isFloat({ min: 0 }).withMessage('Cargo adicional debe ser un número positivo'),
  check('total_price').isFloat({ min: 0 }).withMessage('Precio total debe ser un número positivo'),
  check('status_uuid').isUUID().withMessage('UUID de estado inválido')
];

