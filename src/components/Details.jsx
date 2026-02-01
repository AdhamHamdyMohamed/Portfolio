import { useParams } from "react-router-dom";

export default function Details({
  img,
  name,
  description,
  problemStatement,
  solution,
  outcome,
  github,
  demo,
  onClose,
}) {
  
  return (
    <>
      <dialog open className="modal">
        <div className="modal-box sm:w-2xl h-9/10 ">
          <div className="modal-action">
            <form method="dialog">
              <div className="sm:max-w-3xl max-w-85 mx-auto rounded-lg outline-2 outline-offset-4 outline-dashed outline-zinc-500">
                <img
                  className="rounded-lg"
                  src={`/dataBase/assets/${img}`}
                  alt={name}
                />
              </div>
              <div className="p-4 max-w-full text-center">
                <h1 className="text-4xl font-bold">{name}</h1>
                <p className="text-zinc-600 font-bold mt-2">{description}</p>

                <div className="mt-4 text-left max-w-4xl mx-auto">
                  <h2 className="text-2xl font-semibold mb-2">
                    Problem Statement
                  </h2>
                  <p className="mb-4">{problemStatement}</p>

                  <h2 className="text-2xl font-semibold mb-2">Solution</h2>
                  <p className="mb-4">{solution}</p>

                  <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
                  <p className="mb-4">{outcome}</p>
                </div>
              </div>

              <div className="flex gap-7 justify-center max-w-full">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>

              <div className="text-center mt-5">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn btn-zinc outline-2 outline-offset-4 outline-dashed outline-zinc-500 rounded-md"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
