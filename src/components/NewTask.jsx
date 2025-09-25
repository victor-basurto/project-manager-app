import PropTypes from "prop-types";
import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [entererdTask, setEnteredTask] = useState("");
  // function handleChange(event) {
  //   setEnteredTask(event.target.value);
  // }
  function handleClick() {
    onAdd(entererdTask);
    setEnteredTask(""); // reset the task
  }
  return (
    <div className="flex items-center gap-4">
      <input
        onChange={(e) => setEnteredTask(e.target.value)}
        value={entererdTask}
        type="text"
        className="w 64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
NewTask.propTypes = {
  onDelete: PropTypes.func,
  onAdd: PropTypes.func,
};
