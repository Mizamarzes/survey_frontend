import React, { useState } from "react";
import { saveChapter } from "../../services/ChapterService";
import {
  toastError,
  toastSuccess,
} from "../../services/ToastService/ToastService";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Drawer } from "vaul";
import QuestionForm from "./QuestionForm";
import "./Survey.css";

const ChapterForm = ({ surveyId }) => {
  const [title, setTitle] = useState("");
  const [chapters, setChapters] = useState([]); // Estado para almacenar los capítulos

  // Función para manejar la creación del capítulo
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && surveyId) {
      try {
        // Crear el objeto de capítulo con el título y el surveyId
        const newChapter = { survey_id: surveyId,  chapter_title: title};

        // Guardar el capítulo y obtener el ID
        const chapterId = await saveChapter(newChapter);

        toastSuccess("Chapter saved with ID: " + chapterId);
        // Crear un objeto completo con los datos del capítulo y agregarlo a la lista
        const createdChapter = {
          id: chapterId,
          chapter_title: title,
        };

        // Actualizar la lista de capítulos
        setChapters([...chapters, createdChapter]);

        // Limpiar el campo del formulario
        setTitle("");
      } catch (error) {
        console.error("Error creating chapter:", error);
        toastError("Failed to save chapter. Please try again.");
      }
    }
  };

  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button className="w-full border flex items-center justify-center px-4 py-2 bg-white text-lime-600 rounded-lg hover:bg-lime-100 hover:text-gray-700">
          Add Chapter
          <AiOutlineSwapRight className="ml-2" />
        </button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col items-stretch rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0">
          <div className="p-4 bg-white rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            <div className="max-w-md mx-auto">
              <Drawer.Title className="font-medium mb-4">
                Chapters.
              </Drawer.Title>
              <Drawer.Description className="text-gray-600 mb-2">
                Add a chapter title.
              </Drawer.Description>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter chapter title"
                />
                <button
                  type="submit"
                  className="ml-4 px-6 py-2 bg-white text-green-600 rounded-lg hover:bg-green-100 hover:text-gray-700"
                >
                  Add Chapter
                  <AiOutlineSwapRight className="ml-2" />
                </button>
              </form>
              {/* Mostrar los capítulos creados */}
              <div className="chapter-list mt-4">
                {chapters.length > 0 ? (
                  chapters.map((chapter) => (
                    <div
                      key={chapter.id}
                      className="chapter-item p-2 border border-gray-300 rounded-lg mb-2"
                    >
                      <h3 className="text-lg font-semibold">
                        Chapter Title: {chapter.chapter_title}
                      </h3>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No chapters created yet.</p>
                )}
              </div>
              <Drawer.NestedRoot>
                <Drawer.Trigger className="rounded-md mb-6 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                  Add Question
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                  <Drawer.Content className="bg-gray-100 flex flex-col items-stretch rounded-t-[10px] h-full mt-24 max-h-[94%] fixed bottom-0 left-0 right-0">
                    <div className="p-4 bg-white rounded-t-[10px] flex-1">
                      <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
                      <div className="max-w-md mx-auto">
                        <Drawer.Title className="font-medium mb-4">
                          Questions.
                        </Drawer.Title>
                        <p className="text-gray-600 mb-2">
                          Write a{" "}
                          <span className="font-mono text-[15px] font-semibold">
                            `Question that you want`
                          </span>{" "}
                          add in your chapter.
                        </p>
                        <QuestionForm />
                      </div>
                    </div>
                    <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
                      <div className="flex gap-6 justify-end max-w-md mx-auto">
                        {/* <a
                          className="text-xs text-gray-600 flex items-center gap-0.25"
                          href="https://github.com/emilkowalski/vaul"
                          target="_blank"
                        >
                          GitHub
                        </a>
                        <a
                          className="text-xs text-gray-600 flex items-center gap-0.25"
                          href="https://twitter.com/emilkowalski_"
                          target="_blank"
                        >
                          Twitter
                        </a> */}
                      </div>
                    </div>
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.NestedRoot>
            </div>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200 mt-auto">
            <div className="flex gap-6 justify-end max-w-md mx-auto">
              {/* <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://github.com/emilkowalski/vaul"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-xs text-gray-600 flex items-center gap-0.25"
                href="https://twitter.com/emilkowalski_"
                target="_blank"
              >
                Twitter
              </a> */}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default ChapterForm;
