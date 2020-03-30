import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 979f0e6804dbcc1b8086292a4dcd62a6f0557de9796a6b58db92a9aa469f2c91"
  }
});
