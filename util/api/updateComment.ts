const axios = require("axios");

const updateComment = async ({ content, comment_id }: { content: string; comment_id: number }) => {
  try {
    await axios.patch(`http://localhost:3000/api/comment`, {
      content,
      comment_id,
    });
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default updateComment;
