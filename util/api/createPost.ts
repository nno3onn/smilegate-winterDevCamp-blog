const axios = require("axios");

const createPost = async ({ title, content, thumbnail = null }: { title: string; content: string; thumbnail: string }) => {
  try {
    const res = await axios.post(`http://localhost:3000/api/post`, {
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

export default createPost;
