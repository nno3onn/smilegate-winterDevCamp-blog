const axios = require("axios");

const getCommentsByPostId = async (post_id: number) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/comment?post_id=${post_id}`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default getCommentsByPostId;
