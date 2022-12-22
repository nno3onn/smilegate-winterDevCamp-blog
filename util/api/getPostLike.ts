const axios = require("axios");

const getPostLike = async (post_id: number) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/postLike?post_id=${post_id}`
    );
    return res.data.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default getPostLike;
