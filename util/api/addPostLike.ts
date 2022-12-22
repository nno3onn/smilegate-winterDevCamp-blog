const axios = require("axios");

const addPostLike = async ({
  post_id,
  user_id,
}: {
  post_id: number;
  user_id: number;
}) => {
  try {
    await axios.post(`http://localhost:3000/api/postLike`, {
      post_id,
      user_id,
    });
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default addPostLike;
