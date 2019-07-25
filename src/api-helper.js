import axios from 'axios'
const appId = "399K7K-5Y3YVE5V4X"
const BASE_URL = "https://thingproxy.freeboard.io/fetch/http://api.wolframalpha.com/v2"

export const fetchData = async () => {
  const data = await axios.get(`${BASE_URL}/query?input=cats&appid=${appId}&includepodid=Result`)
  return data
}