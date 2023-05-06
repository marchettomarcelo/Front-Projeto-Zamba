import axios from "axios";

async function getViagens() {
  try {
    const { data } = await axios.get("http://localhost:8080/api/viagem");
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getViagens  };
