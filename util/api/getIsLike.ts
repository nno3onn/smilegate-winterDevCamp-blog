const axios = require("axios");

const getIsLike = async ({
  post_id,
  user_id,
}: {
  post_id: number;
  user_id: number;
}) => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/isLike?post_id=${post_id}&user_id=${user_id}`
    );
    return res.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default getIsLike;
