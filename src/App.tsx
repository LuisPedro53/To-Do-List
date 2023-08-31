import React from "react";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";

import styles from "./Components/App.module.css";
import { TaskForm } from "./Components/TaskForm";
import TaskList from "./Components/TaskList";

import { ITask } from "./Interfaces/Task";

function App() {
  const [taskList, setTaskList] = React.useState<ITask[]>([]);

  return (
    <div>
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
          <TaskList taskList={taskList} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
