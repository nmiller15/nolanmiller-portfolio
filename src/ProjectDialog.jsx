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
  const { title, description, skills, stack, lessons, githubUri, hostedUri } =
    project;

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-surface-100 p-4 text-white">
        <Dialog.Panel className="scrollbar-thumb-rounded-full scrollbar scrollbar-thumb-bg-surface-200 scrollbar-track-opacity-0 mx-auto h-5/6 w-full max-w-96 overflow-y-scroll rounded-lg bg-surface-mixed-200 p-3 sm:max-w-xl lg:max-w-2xl">
          <Dialog.Title className="m-2 mb-8 mt-6 text-3xl sm:text-4xl">
            {title}
          </Dialog.Title>
          <div className="m-2 mb-8 flex gap-4">
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
          <Dialog.Description className="m-2 text-sm text-surface-mixed-600 sm:text-lg">
            <h3 className="pt-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
              Description
            </h3>
            <p className="mt-3 text-surface-mixed-600">{description}</p>
            {stack && (
              <>
                <h3 className="mt-8 pt-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
                  Stack
                </h3>
                <ul className="mt-3">
                  {stack.map((item, index) => {
                    return (
                      <li key={index} className="ml-5 list-disc">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            {lessons && (
              <>
                <h3 className="mt-8 pt-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
                  Lessons
                </h3>
                <ul className="mt-3">
                  {lessons.map((item, index) => {
                    return (
                      <li key={index} className="ml-5 list-disc">
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </Dialog.Description>
          <div className="m-2 mt-8">
            <SkillsList skills={skills} />
          </div>
          <div className="mb-2 mt-8 flex place-content-center">
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
