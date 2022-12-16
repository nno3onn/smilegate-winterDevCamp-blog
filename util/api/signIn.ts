const axios = require("axios");

const signIn = async ({ id, password }) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/sign?id=${id}&password=${password}`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default signIn;
