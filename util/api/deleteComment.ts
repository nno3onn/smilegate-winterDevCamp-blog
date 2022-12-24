const axios = require("axios");

const deleteComment = async (comment_id: number) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/comment?comment_id=${comment_id}`);
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default deleteComment;
