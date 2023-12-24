import { Button, Card } from "flowbite-react";
import React from "react";
import { textColor } from "../../SharedComponent/NavBar";

const ForMap = ({ item, handleTask, updateTask, handleDeleteTask }) => {
  return (
    <>
      {item?.map((task, idx) => (
        <Card key={idx} className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {task?.taskName || ""}
          </h5>
          <div className="grid grid-cols-2">
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              Status :{" "}
              <span className="text-red-500"> {task?.status || ""}</span>
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Priority: {task?.taskType || ""}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Deadline : {task?.taskDeadline || ""}
            </p>
            <button
              onClick={() => updateTask(task._id)}
              className={`btn border-2 border-pink-400 ${textColor}`}
            >
              Go for Update
            </button>
          </div>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {task?.taskDescription || ""}
          </p>
          {task?.status !== "completed" && (
            <Button onClick={() => handleTask(task._id)}>
              {task?.status == "to-do" ? "On Going" : "Complete"}
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          )}
          <Button onClick={() => handleDeleteTask(task._id)}>Delete</Button>
        </Card>
      ))}
    </>
  );
};

export default ForMap;
