import axios from 'axios';

const blogApi = {
  blog() {
    return {
      getAllblogs: () =>
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/ms-club-of-sliit'),
    };
  },
};
export default blogApi;
