import axios from "axios";

const Base_URL_API = "https://api.jokolodang.com/api/v1";

const Login = async (data) => {
  try {
    const url = `${Base_URL_API}/authentication/login`;
    const response = await axios.post(url, data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default Login;
