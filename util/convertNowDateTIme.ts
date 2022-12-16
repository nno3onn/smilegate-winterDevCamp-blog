const convertNowDateTime = () => new Date().toISOString().slice(0, 19).replace("T", " ");

export default convertNowDateTime;
