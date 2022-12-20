const axios = require("axios");

const getPost = async (post_id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/post?post_id=${post_id}`);
    return res.data.data[0];
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default getPost;
