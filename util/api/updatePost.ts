const axios = require("axios");

const updatePost = async ({ post_id, title, content, thumbnail = null }) => {
  try {
    const res = await axios.patch(`http://localhost:3000/api/post`, {
      post_id,
      title,
      content,
      thumbnail,
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default updatePost;
