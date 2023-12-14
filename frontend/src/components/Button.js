const Button = ({
  title,
  onClick,
  bg = "bg-black",
  text = "text-white",
  width = "w-full",
  type,
}) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${bg} ${text} ${width}  py-3 rounded-lg px-8`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
export default Button;
