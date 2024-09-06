import axios from "axios";

const API_URL = 'http://localhost:8080/api/survey';

// Obtener el token JWT desde el almacenamiento local
const getToken = () => {
    return localStorage.getItem('token'); // O sessionStorage si prefieres
};

// Guardar una encuesta
export async function saveSurvey(survey) {
    try {
        const token = getToken();
        return await axios.post(API_URL, survey, {
            headers: {
                Authorization: `Bearer ${token}` // Añadir token JWT al encabezado
            }
        });
    } catch (error) {
        console.error("Error saving survey:", error);S
        throw error;
    }
}

// Obtener todas las encuestas con paginación
export async function getAllSurveys(page = 0, size = 10) {
    try {
        const token = getToken();
        const response = await axios.get(`${API_URL}?page=${page}&size=${size}`, {
            headers: {
                Authorization: `Bearer ${token}` // Añadir token JWT al encabezado
            }
        });
        return response.data; 
    } catch (error) {
        console.error("Error fetching surveys:", error);
        throw error;
    }
}

// Obtener una encuesta por ID
export async function getSurvey(id) {
    try {
        const token = getToken();
        return await axios.get(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}` // Añadir token JWT al encabezado
            }
        });
    } catch (error) {
        console.error("Error fetching survey:", error);
        throw error;
    }
}

// Actualizar una encuesta
export async function updateSurvey(survey) {
    try {
        const token = getToken();
        return await axios.put(API_URL, survey, {
            headers: {
                Authorization: `Bearer ${token}` // Añadir token JWT al encabezado
            }
        });
    } catch (error) {
        console.error("Error updating survey:", error);
        throw error;
    }
}

// Eliminar una encuesta por ID
export async function deleteSurvey(id) {
    try {
        const token = getToken();
        return await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}` // Añadir token JWT al encabezado
            }
        });
    } catch (error) {
        console.error("Error deleting survey:", error);
        throw error;
    }
}
