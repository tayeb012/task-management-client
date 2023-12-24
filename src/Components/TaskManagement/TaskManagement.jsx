import useAllTask from "../../Hooks/useAllTask";
import { useEffect } from "react";
import ForMap from "../ForMap/ForMap";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const TaskManagement = () => {
  const [allTask, refetch, isLoading] = useAllTask();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const toDo = allTask?.filter((task) => task.status == "to-do");
  const ongoing = allTask?.filter((task) => task.status == "on-going");
  const Completed = allTask?.filter((task) => task.status == "completed");
  //   console.log(toDo);

  const handleToDo = (id) => {
    console.log(id);
    axiosSecure
      .put(`/updateTask/id/${id}`, {
        status: "on-going",
      })
      .then((res) => {
        // console.log(res.data);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task On Going SUCCESSFULLY",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.log(error)
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleOnGoing = (id) => {
    console.log(id);
    axiosSecure
      .put(`/updateTask/id/${id}`, {
        status: "completed",
      })
      .then((res) => {
        // console.log(res.data);
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Completed SUCCESSFULLY",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // console.log(error)
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDeleteTask = (id) => {
    axiosSecure
      .delete(`/deleteTask/${id}`)
      .then((res) => {
        refetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Delete SUCCESSFULLY",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  const handleUpdateTask = (id) => {
    console.log(id);
    navigate(`/dashBoard/updateTask/id/${id}`);
  };

  //   const { _id, taskName, taskType, status, taskDeadline, taskDescription } =
  //     toDo || "";

  return (
    <div className="bg-purple-300  flex justify-center ">
      <div className="grid justify-center lg:grid-cols-3 gap-10 w-full text-center">
        <section className=" bg-red-200">
          <h2 className="text-2xl font-bold border-b-2 border-cyan-950">
            To-Do
          </h2>
          <ul className="flex flex-col gap-4">
            <ForMap
              item={toDo}
              handleTask={handleToDo}
              updateTask={handleUpdateTask}
              handleDeleteTask={handleDeleteTask}
            ></ForMap>
          </ul>
        </section>
        <section className=" bg-blue-200">
          <h2 className="text-2xl font-bold border-b-2 border-cyan-950">
            On-Going{" "}
          </h2>
          <ul className="flex flex-col gap-4">
            <ForMap
              item={ongoing}
              handleTask={handleOnGoing}
              updateTask={handleUpdateTask}
              handleDeleteTask={handleDeleteTask}
            ></ForMap>
          </ul>
        </section>
        <section className=" bg-yellow-200">
          <h2 className="text-2xl font-bold border-b-2 border-cyan-950">
            Completed
          </h2>
          <ul className="flex flex-col gap-4">
            <ForMap
              item={Completed}
              handleTask={handleOnGoing}
              updateTask={handleUpdateTask}
              handleDeleteTask={handleDeleteTask}
            ></ForMap>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TaskManagement;
