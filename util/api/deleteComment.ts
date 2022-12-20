const axios = require("axios");

const deleteComment = async (comment_id: number) => {
  try {
    console.log("deleteCOmment", comment_id);
    const res = await axios.delete(`http://localhost:3000/api/comment?comment_id=${comment_id}`);
    console.log(res);
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default deleteComment;
