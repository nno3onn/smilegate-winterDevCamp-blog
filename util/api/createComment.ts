const axios = require("axios");

const createComment = async ({ post_id, content, user_id }: { post_id: number; content: string; user_id: number }) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/comment`, {
      post_id,
      content,
      user_id,
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default createComment;
