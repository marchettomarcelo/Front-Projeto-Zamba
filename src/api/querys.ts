import axios from "axios";


// const url = "http://192.168.10.117:8080/api/viagem"
const url = "http://localhost:8080/api/viagem"

async function getViagens() {
  try {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getViagens  };
