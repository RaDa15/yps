import React from "react";

const MatchFinder = () => {
    return (
        <div className="bg-blue-50 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-5">

                Scholarship Match Finder
            </h3>
            <label>
                Academic Level
            </label>
            <select className="w-full p-3 rounded-xl mt-2 mb-4">
                <option>
                    Undergraduate
                </option>
                <option>
                    Postgraduate
                </option>
            </select>
            <label>
                Field
            </label>
            <select className="w-full p-3 rounded-xl mt-2">
                <option>
                    Computer Science
                </option>
                <option>
                    Engineering
                </option>
                <option>
                    Medicine
                </option>
            </select>
            <button className="bg-blue-700 text-white w-full mt-6 py-3 rounded-xl">
                Find Scholarships
            </button>
        </div>
    )
}

export default MatchFinder;