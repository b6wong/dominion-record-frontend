import axios from "axios";

const REACT_APP_BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || 'localhost';
const REACT_APP_BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || 8080;
const REACT_APP_BACKEND_PATH_PREFIX = process.env.REACT_APP_BACKEND_PATH_PREFIX || '';
const REACT_APP_BACKEND_PROTOCOL = process.env.REACT_APP_BACKEND_PROTOCOL || 'https';

export default axios.create({
  baseURL: `${REACT_APP_BACKEND_PROTOCOL}://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}${REACT_APP_BACKEND_PATH_PREFIX}/api`,
  headers: {
    "Content-type": "application/json"
  }
});