import axios from "axios";

const API_URL = 'http://localhost:8080/api/survey';

export async function saveSurvey(survey) {
    return await axios.post(API_URL, survey);
}

export async function getAllSurveys(page = 0, size = 10) {
    try {
        const response = await axios.get(`${API_URL}?page=${page}&size=${size}`);
        return response.data; 
    } catch (error) {
        console.error("Error fetching surveys:", error);
        throw error;
    }
}

export async function getSurvey(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function updateSurvey(survey) {
    return await axios.put(API_URL, survey);
}

export async function deleteSurvey(id) {
    return await axios.delete(`${API_URL}/${id}`);
}