const axios = require("axios");

const getPostList = async () => {
  try {
    const res = await axios.get(`http://localhost:3000/api/getPostList`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default getPostList;
