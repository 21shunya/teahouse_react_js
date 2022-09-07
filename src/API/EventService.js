import axios from "axios";

const HTTP = 'https://jsonplaceholder.typicode.com'

export default class EventService {
  static async getAllEvents() {
    const response = await axios.get(HTTP + '/posts');
    return response.data;
  }
}