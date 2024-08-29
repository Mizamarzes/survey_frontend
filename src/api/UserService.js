import axios from "axios";

const API_URL = 'http://localhost:8080/user';

export async function saveUser(user) {
    return await axios.post(API_URL, user);
}

export async function getUser(user) {
    return await axios.post(API_URL, user);
}

export async function getAllUsers(users) {
    return await axios.get(API_URL, users);
}