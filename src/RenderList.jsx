import PropTypes from 'prop-types';

export default function RenderList({ title, list }) {
  RenderList.propTypes = {
    list: PropTypes.array.isRequired,
    title: PropTypes.string,
  };

  return (
    <>
      {title && (
        <h3 className="ml-2 mt-8 pt-2 text-lg font-semibold text-white sm:text-xl md:text-2xl">
          {title}
        </h3>
      )}
      <ul className="mt-3">
        {list.map((item, index) => {
          return (
            <li
              key={index}
              className="mx-6 list-disc text-sm text-surface-mixed-600 sm:text-lg"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}
