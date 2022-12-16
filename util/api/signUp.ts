import axios from "axios";

const signUp = async ({ id, password, name }) => {
  try {
    const res = await axios.post("http://localhost:3000/api/sign", {
      id,
      password,
      name,
    });
    return res;
  } catch ({ response: { data } }) {
    alert(data.message);
  }
};

export default signUp;
