import axios from "axios";

const HTTP = 'https://jsonplaceholder.typicode.com'

export default class EventsService {
  static async getAllNews() {
    const response = axios.get(HTTP + '/posts');
    return response;
  }
}