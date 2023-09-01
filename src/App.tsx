import React from "react";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";

import styles from "./Components/App.module.css";
import { TaskForm } from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

import Modal from "./Components/Modal";

import { ITask } from "./Interfaces/Task";

function App() {
  const [taskList, setTaskList] = React.useState<ITask[]>([]);

  const [taskToUpdate, setTaskToUpdate] = React.useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");

    if (display) {
      modal?.classList.remove("hide");
    } else {
      modal?.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Editar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2> O que voce vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
