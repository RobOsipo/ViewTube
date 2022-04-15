import axios from 'axios'
const KEY = 'AIzaSyAzbrJ754BpytIffpfNUVhJNZyvoBAzriM'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

// export default axios.create({
//     baseURL: 'https://www.googleapis.com/youtube/v3',
//     params: {
//       part: 'snippet', 
//       type: 'video',
//       maxResults: 5,
//       key: KEY
//   }
// });
