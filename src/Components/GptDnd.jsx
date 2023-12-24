import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TaskList = ({ tasks, status }) => {
  return (
    <Droppable droppableId={status} key={status}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="task-list"
        >
          {tasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  className="task-item"
                >
                  {task.name}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const GptDnd = () => {
  const tasks = {
    todo: [
      { id: "1", name: "Task 1" },
      { id: "2", name: "Task 2" },
    ],
    ongoing: [
      { id: "3", name: "Task 3" },
      { id: "4", name: "Task 4" },
    ],
    completed: [
      { id: "5", name: "Task 5" },
      { id: "6", name: "Task 6" },
    ],
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    // Check if the task was dropped outside a droppable area
    if (!destination) {
      return;
    }

    // Check if the task was dropped in a different position or status
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Find the task and update its status
    const updatedTasks = { ...tasks };
    const movedTask = updatedTasks[source.droppableId].splice(
      source.index,
      1
    )[0];
    updatedTasks[destination.droppableId].splice(
      destination.index,
      0,
      movedTask
    );

    // TODO: Update the state or send the updated task data to the backend
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-board flex justify-between">
        <TaskList tasks={tasks.todo} status="todo" />
        <TaskList tasks={tasks.ongoing} status="ongoing" />
        <TaskList tasks={tasks.completed} status="completed" />
      </div>
    </DragDropContext>
  );
};

export default GptDnd;
