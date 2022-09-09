import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com'

export default class EventService {
  static async getAllEvents(limit = 10, page = 1) {
    const response = await axios.get(URL + '/posts', {
      params: {
        _limit: limit,
        _page: page
      }
    });
    return response.data;
  }
}