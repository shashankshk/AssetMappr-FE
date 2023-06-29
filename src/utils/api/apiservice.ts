import axios from 'axios'

// will import axios from this file which is to be used in other components
export default axios.create({
  // setting the base url which will be used in the entire application
  // TODO: set the base url of the Django app
  baseURL: 'http://localhost:8000/api',
})
