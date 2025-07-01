import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL + "/events";

export const getEvents = () => axios.get(API_URL);
export const getEventById = (id) => axios.get(`${API_URL}/${id}`);
export const createEvent = (event) => axios.post(`${API_URL}/add`, event);
export const updateEvent = (id, event) => axios.put(`${API_URL}/edit/${id}`, event);
export const deleteEvent = (id) => axios.delete(`${API_URL}/delete/${id}`);

