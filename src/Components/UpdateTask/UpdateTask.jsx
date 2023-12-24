import { Datepicker } from "flowbite-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAllTask from "../../Hooks/useAllTask";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const { id } = useParams();
  const [allTask, isLoading] = useAllTask();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const today = new Date();

  const updateTask = allTask?.find((task) => task._id == id);
  const { _id, taskName, taskType, taskDeadline, taskDescription } =
    updateTask || "";
  const handleUpdateTask = (e) => {
    e.preventDefault();
    // Extract values from the form
    const taskName = e.target.TaskName.value;
    const taskType = e.target.TaskType.value;
    const taskDeadlineString = e.target.TaskDeadline.value;
    const taskDeadline = new Date(taskDeadlineString);
    const taskDescription = e.target.TaskDescription.value;

    // Create a new task object
    const updateTask = {
      taskName,
      taskType,
      status: "to-do",
      taskDeadline,
      taskDescription,
    };

    // Log the new task object (replace this with your desired action)
    console.log("New Task:", updateTask);
    axiosSecure
      .put(`/totalUpdateTask/id/${_id}`, updateTask)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task Updated SUCCESSFULLY",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Navigate after the user sees the success message
          navigate(`/dashBoard/taskManagement`);
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div className=" flex justify-center ">
        {/* <Helmet>
          <title>Update Task - SavorSphere Eatery</title>
        </Helmet> */}
        <div className="p-4 w-3/5">
          <h2 className="text-2xl font-bold text-center text-pink-500 mb-4">
            Update The Task
          </h2>
          <form onSubmit={handleUpdateTask} className="p-4 rounded shadow-md">
            <div className="mb-4">
              <label
                htmlFor="TaskName"
                className="block text-sm font-medium text-blue-500"
              >
                Task Name
              </label>
              <input
                type="text"
                name="TaskName"
                defaultValue={taskName} // Use defaultValue to set the default value
                className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="TaskType"
                className="block text-sm font-medium text-blue-500"
              >
                Task Category:
              </label>
              <select
                name="TaskType"
                defaultValue={taskType} // Use value to set the default value
                className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled>
                  Select task category
                </option>
                <option value="Low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="TaskDeadline"
                className="block text-sm font-medium text-blue-500"
              >
                Task Dead Line
              </label>
              <Datepicker
                name="TaskDeadline"
                minDate={today}
                maxDate={new Date(2025, 1, 30)}
                // onChange={handleDateChange} // Make sure to handle date changes
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="TaskDescription"
                className="block text-sm font-medium text-blue-500"
              >
                Task Description
              </label>
              <textarea
                name="TaskDescription"
                defaultValue={taskDescription} // Use value to set the default value
                className="w-full border border-blue-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="btn-wide text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
