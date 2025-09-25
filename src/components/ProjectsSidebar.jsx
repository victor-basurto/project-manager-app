import PlusIcon from "./icons/PlusIcon";
import Button from "./Button";
import PropTypes from "prop-types";
export default function ProjectsSidebar({ onStartAddProject, projects }) {
  console.log("projects: ", projects);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>
          <div className="flex gap-2">
            <PlusIcon /> Add Project
          </div>
        </Button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

ProjectsSidebar.propTypes = {
  onStartAddProject: PropTypes.func,
  projects: PropTypes.array,
};
