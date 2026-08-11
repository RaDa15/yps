import {
    Plus,
    Search,
    Lightbulb,
    Users,
    Eye,
    Edit,
    Trash2,
    X
} from "lucide-react";

import {
    useState
} from "react";

const AdditionalInitiatives = () => {

    const [showForm, setShowForm] = useState(false);
    const initiatives = [
        {
            id: 1,
            title: "Green Bhutan Campaign",
            category: "Environment",
            leader: "Tshering Pem",
            participants: 35,
            progress: "Completed",
            impact: "500 trees planted"
        },

        {
            id: 2,
            title: "Youth Startup Challenge",
            category: "Entrepreneurship",
            leader: "Sonam Dorji",
            participants: 20,
            progress: "Ongoing",
            impact: "10 business ideas created"
        },

        {
            id: 3,
            title: "Digital Literacy Project",
            category: "Technology",
            leader: "Karma Wangmo",
            participants: 50,
            progress: "Planning",
            impact: "-"
        }
    ];

    return (
        <div className="space-y-6 w-full">
            {/* HEADER */}
            <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold">
                        Additional Initiatives
                    </h1>
                    <p className="text-gray-500">
                        Manage youth-led special initiatives
                    </p>
                </div>
                <button
                    onClick={() => setShowForm(true)}
                    className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2">
                    <Plus size={20} />
                    Create Initiative
                </button>
            </div>

            {/* STATS */}
            <div className="grid md:grid-cols-4 gap-5">
                <div className="bg-white p-5 rounded-xl shadow">
                    <p>Total Initiatives</p>
                    <h2 className="text-3xl font-bold">
                        65
                    </h2>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                    <p>Ongoing</p>
                    <h2 className="text-3xl font-bold text-blue-600">
                        18
                    </h2>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                    <p>Youth Involved</p>
                    <h2 className="text-3xl font-bold text-green-600">
                        950
                    </h2>
                </div>
                <div className="bg-white p-5 rounded-xl shadow">
                    <p>Completed</p>
                    <h2 className="text-3xl font-bold text-purple-600">
                        40
                    </h2>
                </div>
            </div>

            {/* SEARCH */}
            <div className="bg-white p-4 rounded-xl shadow flex items-center gap-3">
                <Search size={20} />
                <input
                    placeholder="Search initiatives..."
                    className="outline-none w-full"/>
            </div>

            {/* TABLE */}
            <div className="bg-white rounded-xl shadow overflow-x-auto">
                <table className="w-full table-auto">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="p-4 text-left">
                                Initiative
                            </th>
                            <th className="p-4 text-left">
                                Category
                            </th>
                            <th className="p-4 text-left">
                                Leader
                            </th>
                            <th className="p-4 text-left">
                                Participants
                            </th>
                            <th className="p-4 text-left">
                                Progress
                            </th>
                            <th className="p-4 text-left">
                                Impact
                            </th>
                            <th className="p-4 text-left">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            initiatives.map((item) => (
                                <tr
                                    key={item.id}
                                    className="border-t hover:bg-gray-50">
                                    <td className="p-4 font-medium">
                                        <div className="flex items-center gap-2">
                                            <Lightbulb size={18} />
                                            {item.title}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        {item.category}
                                    </td>
                                    <td className="p-4">
                                        {item.leader}
                                    </td>

                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <Users size={18} />
                                            {item.participants}
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                            {item.progress}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        {item.impact}
                                    </td>

                                    <td className="p-4">
                                        <div className="flex gap-3">
                                            <button className="text-blue-600">
                                                <Eye size={18} />
                                            </button>
                                            <button className="text-green-600">
                                                <Edit size={18} />
                                            </button>
                                            <button className="text-red-600">
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            {/* CREATE MODAL */}
            {
                showForm &&
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
                    <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
                        <div className="flex justify-between mb-6">
                            <h2 className="text-2xl font-bold">
                                Create Initiative
                            </h2>
                            <button
                                onClick={() => setShowForm(false)}><X />
                            </button>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                placeholder="Initiative Name"
                                className="border rounded-xl p-3"/>
                            <select className="border rounded-xl p-3">
                                <option>Category</option>
                                <option>Environment</option>
                                <option>Technology</option>
                                <option>Entrepreneurship</option>
                                <option>Community Service</option>
                            </select>
                            <input
                                placeholder="Youth Leader"
                                className="border rounded-xl p-3"/>
                            <input
                                placeholder="Expected Participants"
                                className="border rounded-xl p-3"/>
                            <textarea placeholder="Initiative Description"
                            className="border rounded-xl p-3 md:col-span-2"></textarea>
                        </div>
                        <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-xl">
                            Save Initiative
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default AdditionalInitiatives;