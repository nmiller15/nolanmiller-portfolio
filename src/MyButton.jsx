import PropTypes from "prop-types";

export function MyButton({
  callback,
  colorClass = "bg-primary-200",
  text,
  icon = null,
}) {
  MyButton.propTypes = {
    callback: PropTypes.function,
    colorClass: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
  };
  return (
    <button
      className={`text-md rounded-full font-semibold ${colorClass} flex items-center gap-3 px-6 py-3 ${icon && "pr-8"} hover:text-[#fff] active:bg-primary-300`}
      onClick={callback}
    >
      {icon && <i className={`${icon} text-xl sm:text-2xl`}></i>}
      {text}
    </button>
  );
}
