import PropTypes from "prop-types";

export default function RenderList({ title, list }) {
  RenderList.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string,
  };

  return (
    <>
      {title && (
        <h3 className="mt-8 pt-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
          {title}
        </h3>
      )}
      <ul className="mt-3">
        {list.map((item, index) => {
          return (
            <li key={index} className="ml-5 list-disc">
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
