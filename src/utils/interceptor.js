import axios from 'axios';

export default {
  setupInterceptors: (value,navigate) => {

      axios.interceptors.response.use(response => {
        console.log(response)
        return response;
      }, error => {

      if (error.response.status === 401) {
        // store.dispatch(logoutUser());
      }

      if (error.response.status === 404) {
        //  history.push('/not-found');
      }

      return Promise.reject(error);
    });
  },
};