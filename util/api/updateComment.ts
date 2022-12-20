const axios = require("axios");

const updateComment = async ({ content, comment_id }: { content: string; comment_id: number }) => {
  try {
    const res = await axios.patch(`http://localhost:3000/api/comment`, {
      content,
      comment_id,
    });
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default updateComment;
