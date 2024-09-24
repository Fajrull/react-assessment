import axios from "axios";

const Base_URL_API = "https://api.jokolodang.com/api/v1";

function getAuthTokenFromCookies() {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "access_token") {
      return value;
    }
  }
  return null;
}

const authToken = getAuthTokenFromCookies();

export const createShipping = async (data) => {
  try {
    const url = `${Base_URL_API}/finance/shippingComps`;
    const config = {
      headers: { Authorization: `Bearer ${getAuthTokenFromCookies()}` },
    };
    const response = await axios.post(url, data, config);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getShipping = async () => {
  try {
    const url = `${Base_URL_API}/finance/shippingComps`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.get(url, config);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateShipping = async (id, data) => {
  try {
    const url = `${Base_URL_API}/finance/shippingComps/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.put(url, data, config);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteShipping = async (id) => {
  try {
    const url = `${Base_URL_API}/finance/shippingComps/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${authToken}` },
    };
    const response = await axios.delete(url, config);
    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
