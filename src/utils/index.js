import axios from "axios";

const userFilename =
  "https://aws-node-getting-started383027d1-0f15-43f9-a586-d4aa7d6139a7.s3.ap-south-1.amazonaws.com/user_data.json";

export async function getUsers() {
  try {
    const response = await axios.get(userFilename);
    return response;
  } catch (err) {
    console.error(err);
  }
}
