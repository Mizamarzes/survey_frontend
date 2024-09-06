import axios from "axios";

const API_URL = "http://localhost:8080/api/chapter";

// Obtener el token JWT desde el almacenamiento local
const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found in localStorage");
  }
  return token;
};

// Guardar un Capitulo y retornar el ID de la capitulo creado
export async function saveChapter(chapter) {
  try {
    const token = getToken();

    // Hacer la petición POST para crear el capitulo
    const response = await axios.post(API_URL, chapter, {
      headers: {
        Authorization: `Bearer ${token}`, // Añadir token JWT al encabezado
      },
    });

    const createdChapter = response.data;
    const chapterId = createdChapter.id; // Obtener el ID desde la respuesta

    return chapterId; // Retornar el ID
  } catch (error) {
    console.error("Error saving chapter:", error);
    throw error;
  }
}

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
