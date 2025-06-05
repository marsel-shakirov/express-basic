import { celebrate, Joi, Segments } from 'celebrate';

export const validateBody = () => {
	celebrate({
		[Segments.BODY]: {
			title: Joi.string().required(),
			completed: Joi.boolean().required(),
		},
	});
};
