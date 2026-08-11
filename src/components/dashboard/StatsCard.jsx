const StatsCard = ({
  title,
  value,
  icon,
  description,
  color = "bg-blue-50"
}) => {

  return (
    <div
      className={` ${color} rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 border`}>

      {/* Icon */}
      <div className=" flex justify-between items-start">
        <div className=" text-4xl">
          {icon}
        </div>
      </div>

      {/* Value */}
      <h2 className=" text-3xl font-bold text-gray-800 mt-5">
        {value}
      </h2>

      {/* Title */}
      <p className=" text-gray-700 font-semibold mt-2">
        {title}
        </p>

      {/* Description */}
      {
        description &&
        <p className=" text-sm text-gray-500 mt-2 ">
          {description}
        </p>
      }
    </div>
  );
};

export default StatsCard;