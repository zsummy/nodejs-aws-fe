import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
  count: number,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().positive().test(
    'is-price',
    'only two decimal digits are allowed',
    value => /^(\d+(\.\d{1,2})?$)|(\.\d{1,2}$)/.test(`${value}`)
  ).required(),
  count: Yup.number().integer().min(0).required(),
});
