import { Joi } from "celebrate";

export default {
  signup: Joi.object({
    name: Joi.string().required().min(3),
    email: Joi.string().email().required(),
    phone: Joi.number().required().min(10),
    age: Joi.number().optional().min(1),
  }),
  login: Joi.object().keys({
    name: Joi.string().optional(),
    email: Joi.string().email().required(),
    phone: Joi.number().required().min(10),
  }),
};
