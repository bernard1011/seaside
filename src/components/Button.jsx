const Button = ({ name, iconO, iconT, width}) => {
  return (
    <button className={`bg-blue-700 px-5 py-3 flex gap-3 ${width} text-gray-50 text-sm font-bold rounded-lg justify-center items-center lg:text-lg`}>
      {iconO}
      {name}
      {iconT}
    </button>
  );
};

export default Button;
