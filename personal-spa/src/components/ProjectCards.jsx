/* eslint-disable react/prop-types */
function ProjectCards(props) {
  return (
    <>
      <div
        id={props.id}
        className="flex flex-col mx-8 lg:flex-row bg-gray-800 items-center lg:h-72 max-w-lg lg:max-w-6xl mt-16 rounded-lg drop-shadow-md"
      >
        <img
          src={props.path}
          alt={props.alt}
          className="rounded-l-lg w-full max-h-72"
        />

        <div className="p-8">
          <h3 className="font-semibold text-xl mb-2 drop-shadow-lg">
            {props.name}
          </h3>
          <p className="mb-4 drop-shadow-sm">{props.description}</p>
          <a
            className="flex flex-row justify-center lg:inline-block bg-blue-600 py-2 px-8 rounded-md uppercase font-semibold hover:shadow-md hover:shadow-slate-950 hover:bg-blue-500 transition ease-in-out delay-80"
            href={props.url}
          >
            {props.location}
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCards;
