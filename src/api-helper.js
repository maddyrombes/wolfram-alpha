import axios from 'axios'
const appId = "399K7K-5Y3YVE5V4X"
const BASE_URL = "http://api.wolframalpha.com/v2/"

export default fetchData = async () => {
  const data = await axios.get(`${BASE_URL}/query?input=pi/&appid=${appId}`)
  return data
}