const ModuleCard = ({
  title,
  icon,
  description,
  onClick
}) => {

  return (
    <div
      onClick={onClick}
      className=" bg-white rounded-2xl shadow-sm border p-6 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition duration-300">
      {/* Icon */}
      <div className=" w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-3xl">
        {icon}
      </div>

      {/* Title */}
      <h3 className=" text-lg font-bold text-gray-800 mt-5 ">
        {title}
      </h3>

      {/* Description */}
      <p className=" text-gray-500 text-sm mt-2 leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <button className=" mt-5 text-blue-700 font-semibold text-sm flex items-center gap-2">
        Open Module
        <span>
          →
        </span>
      </button>
    </div>
  );
};

export default ModuleCard;