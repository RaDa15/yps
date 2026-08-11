function OpportunityCard({
    title,
    category,
    description
}) {

    return (
        <div className=" bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition">
            <div className=" h-40 bg-gradient-to-r from-blue-600 to-blue-400"/>
            <div className="p-6">
                <span
                    className=" text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                    {category}
                </span>

                <h3 className=" text-xl font-bold mt-4">
                    {title}
                </h3>

                <p className=" text-gray-600 text-sm mt-3">
                    {description}
                </p>

                <button className=" mt-6 w-full bg-blue-700 text-white py-3 rounded-xl font-bold hover:bg-blue-800">
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default OpportunityCard;