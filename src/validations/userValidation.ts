import { body } from 'express-validator';

export const userValidations = [
    body('name')
        .isLength({ min: 1 })
        .withMessage('Name is required'),
    
    body('email')
        .isEmail()
        .withMessage('Invalid email address'),
    
    body('mobile')
        .isLength({ min: 10 })
        .withMessage('Mobile number must be at least 10 characters'),
    
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be at least 6 characters long'),
    
    body('address')
        .isLength({ min: 1 })
        .withMessage('Address is required')
];