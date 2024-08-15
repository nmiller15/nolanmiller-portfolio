import { Dialog } from "@headlessui/react";
import { MyButton } from "./MyButton";
import { SkillsList } from "./SkillsList";
import PropTypes from "prop-types";

export default function ProjectDialog({ isOpen, setIsOpen, project = {} }) {
  ProjectDialog.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    project: PropTypes.object.isRequired,
  };

  if (!project) return;
  const { title, description, skills, githubUri, hostedUri } = project;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-surface-100 p-4 text-white">
        <Dialog.Panel className="mx-auto w-full max-w-96 rounded-lg bg-surface-mixed-200 p-3 sm:max-w-xl lg:max-w-2xl">
          <Dialog.Title className="m-2 mb-8 mt-6 text-3xl sm:text-4xl">
            {title}
          </Dialog.Title>
          <div className="m-2 mb-8 flex">
            <a href={hostedUri} target="_blank">
              <MyButton
                colorClass="bg-surface-mixed-300"
                callback={() => console.log("click")}
                text="View"
                icon="iconoir-computer"
              />
            </a>
            <a href={githubUri} target="_blank">
              <MyButton
                colorClass="bg-surface-mixed-300"
                callback={() => console.log("click")}
                text="Code"
                icon="iconoir-github-circle"
              />
            </a>
          </div>
          <Dialog.Description className="m-2 text-sm text-surface-500 sm:text-lg">
            <h3>Description</h3>
            <p>{description}</p>
            {/* <h3>Stack</h3>
            <ul>
              <li></li>
            </ul> */}
          </Dialog.Description>
          <div className="m-2 mt-6">
            <SkillsList skills={skills} />
          </div>
          <div className="mb-6 mt-8 flex place-content-center">
            <MyButton
              colorClass="bg-surface-mixed-300"
              callback={() => setIsOpen(false)}
              text="Close"
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
