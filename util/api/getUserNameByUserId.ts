const axios = require("axios");

const getUserNameByUserId = async (user_id: number) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/getUserName?user_id=${user_id}`);
    return res.data;
  } catch (err) {
    console.log(err);
    alert(err.response?.data.message);
  }
};

export default getUserNameByUserId;
