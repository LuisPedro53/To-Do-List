import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import { ITask } from "../Interfaces/Task";

import styles from "./TaskForm.module.css";

export interface IAppProps {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
}

export function TaskForm({ btnText, taskList, setTaskList }: IAppProps) {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000);

    const newTask: ITask = { id, title, difficulty };

    setTaskList!([...taskList, newTask]);

    setTitle("");
    setDifficulty(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Titulo:</label>
        <input
          type="text"
          name="title"
          placeholder="Titulo da Tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>

      <div className={styles.input_container}>
        <label htmlFor="difficulty">Difuldade</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da Tarefa"
          value={difficulty}
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText}></input>
    </form>
  );
}
