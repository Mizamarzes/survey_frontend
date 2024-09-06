import axios from "axios";

const API_URL = 'http://localhost:8080/api/chapter';

// Obtener el token JWT desde el almacenamiento local
const getToken = () => {
    return localStorage.getItem('token'); // O sessionStorage si prefieres
};

// Obtener una encuesta por ID
export async function getChapter(id) {
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