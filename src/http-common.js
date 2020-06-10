import axios from "axios";

const REACT_APP_BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || 'localhost';
const REACT_APP_BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || 8080;
const REACT_APP_BACKEND_PATH_PREFIX = process.env.REACT_APP_BACKEND_PATH_PREFIX || '';

export default axios.create({
  baseURL: `http://${REACT_APP_BACKEND_HOST}:${REACT_APP_BACKEND_PORT}${REACT_APP_BACKEND_PATH_PREFIX}/api`,
  headers: {
    "Content-type": "application/json"
  }
});