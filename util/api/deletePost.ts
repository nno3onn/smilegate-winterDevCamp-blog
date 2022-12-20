const axios = require("axios");

const deletePost = async (post_id: number) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/post?post_id=${post_id}`);
    // console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default deletePost;
