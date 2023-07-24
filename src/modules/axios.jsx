import axios from "axios";

export default axios.create(
    {
        baseURL:'http://localhost:3000',//'https://instapost-server.onrender.com',
        headers:{
            "Content-Type":"application/json"
          },
          withCredentials: true
    }
)