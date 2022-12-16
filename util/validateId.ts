const validateId = (v: string) => /^[a-z]+[a-z0-9]{5,19}$/g.test(v);

export default validateId;
