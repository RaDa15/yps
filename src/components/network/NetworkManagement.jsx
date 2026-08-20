import { useState } from "react";
import {
  Plus,
  Users,
  Bell,
  Settings,
  Edit3,
  CalendarPlus,
  CheckCircle2,
  Clock3,
  MapPin,
  Mail,
  Save,
  X,
  Send,
  Activity,
} from "lucide-react";

const NetworkManagement = () => {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState(false);

  const [activityForm, setActivityForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const [broadcastForm, setBroadcastForm] = useState({
    subject: "",
    message: "",
  });

  const [network, setNetwork] = useState({
    name: "Youth Led Group Bhutan Network",
    focalPoint: "Pema Choden",
    location: "Thimphu",
    email: "ypeer@example.bt",
    description:
      "Youth-led network supporting peer education, volunteering and youth engagement activities across Bhutan.",
  });

  const [saved, setSaved] = useState(false);

  const handleActivitySubmit = (event) => {
    event.preventDefault();

    setShowActivityModal(false);

    setActivityForm({
      title: "",
      date: "",
      location: "",
      description: "",
    });

    alert("Network activity created successfully.");
  };

  const handleBroadcast = (event) => {
    event.preventDefault();

    setShowBroadcastModal(false);

    setBroadcastForm({
      subject: "",
      message: "",
    });

    alert("Broadcast sent to network volunteers.");
  };

  const handleNetworkSave = (event) => {
    event.preventDefault();

    setSaved(true);

    setTimeout(() => {
      setSaved(false);
      setShowNetworkModal(false);
    }, 1200);
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>

        <p className="text-sm font-semibold text-emerald-600">
          Network Operations
        </p>

        <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
          Network Management
        </h1>

        <p className="text-sm text-gray-500 mt-2 max-w-3xl">
          Manage network activities, volunteer communication,
          network information and day-to-day Y-PEER operations.
        </p>

      </div>

      {/* QUICK ACTIONS */}
      <section>

        <div className="flex items-center justify-between mb-4">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Quick Actions
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Frequently used network management actions.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* CREATE ACTIVITY */}
          <button
            onClick={() => setShowActivityModal(true)}
            className="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:border-blue-300 hover:shadow-md transition"
          >

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-105 transition">
              <CalendarPlus className="w-5 h-5" />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">
              Create Activity
            </h3>

            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Create a new activity or event for volunteers in your network.
            </p>

            <div className="mt-4 text-xs font-bold text-blue-600">
              Create Activity →
            </div>

          </button>

          {/* APPROVALS */}
          <button
            onClick={() =>
              window.location.href =
                "/network-focal-dashboard/approvals"
            }
            className="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:border-emerald-300 hover:shadow-md transition"
          >

            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-105 transition">
              <CheckCircle2 className="w-5 h-5" />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">
              Review Approvals
            </h3>

            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Review pending volunteer requests and activity submissions.
            </p>

            <div className="mt-4 text-xs font-bold text-emerald-600">
              Open Approval Queue →
            </div>

          </button>

          {/* BROADCAST */}
          <button
            onClick={() => setShowBroadcastModal(true)}
            className="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:border-purple-300 hover:shadow-md transition"
          >

            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-105 transition">
              <Bell className="w-5 h-5" />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">
              Broadcast Message
            </h3>

            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Send an announcement or important update to network volunteers.
            </p>

            <div className="mt-4 text-xs font-bold text-purple-600">
              Send Broadcast →
            </div>

          </button>

          {/* NETWORK SETTINGS */}
          <button
            onClick={() => setShowNetworkModal(true)}
            className="group bg-white border border-gray-200 rounded-2xl p-5 text-left hover:border-orange-300 hover:shadow-md transition"
          >

            <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-105 transition">
              <Settings className="w-5 h-5" />
            </div>

            <h3 className="font-bold text-gray-900 mt-5">
              Network Information
            </h3>

            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Update network information, contact details and description.
            </p>

            <div className="mt-4 text-xs font-bold text-orange-600">
              Manage Network →
            </div>

          </button>

        </div>

      </section>

      {/* NETWORK STATUS */}
      <section>

        <div className="flex items-center justify-between mb-4">

          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Network Status
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Current operational snapshot.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">

            <span className="w-2 h-2 rounded-full bg-emerald-500" />

            Active Network

          </span>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <Users className="w-5 h-5 text-blue-600" />

            <p className="text-xs text-gray-500 mt-4">
              Active Volunteers
            </p>

            <p className="text-2xl font-extrabold text-gray-900 mt-1">
              86
            </p>

            <p className="text-xs text-emerald-600 font-semibold mt-1">
              +8 this month
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <Activity className="w-5 h-5 text-purple-600" />

            <p className="text-xs text-gray-500 mt-4">
              Active Activities
            </p>

            <p className="text-2xl font-extrabold text-gray-900 mt-1">
              14
            </p>

            <p className="text-xs text-gray-500 mt-1">
              Across the network
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <Clock3 className="w-5 h-5 text-orange-600" />

            <p className="text-xs text-gray-500 mt-4">
              Pending Reviews
            </p>

            <p className="text-2xl font-extrabold text-gray-900 mt-1">
              7
            </p>

            <p className="text-xs text-amber-600 font-semibold mt-1">
              Requires attention
            </p>

          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5">

            <CheckCircle2 className="w-5 h-5 text-emerald-600" />

            <p className="text-xs text-gray-500 mt-4">
              Completed Activities
            </p>

            <p className="text-2xl font-extrabold text-gray-900 mt-1">
              37
            </p>

            <p className="text-xs text-gray-500 mt-1">
              This year
            </p>

          </div>

        </div>

      </section>

      {/* NETWORK INFORMATION */}
      <section className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              Network Information
            </h2>

            <p className="text-xs text-gray-500 mt-1">
              Current information visible to network members.
            </p>

          </div>

          <button
            onClick={() => setShowNetworkModal(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold"
          >
            <Edit3 className="w-4 h-4" />
            Edit Information
          </button>

        </div>

        <div className="p-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div>

              <p className="text-[10px] uppercase font-bold text-gray-400">
                Network Name
              </p>

              <p className="text-sm font-bold text-gray-900 mt-1">
                {network.name}
              </p>

            </div>

            <div>

              <p className="text-[10px] uppercase font-bold text-gray-400">
                Network Focal Point
              </p>

              <p className="text-sm font-bold text-gray-900 mt-1">
                {network.focalPoint}
              </p>

            </div>

            <div className="flex items-start gap-3">

              <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />

              <div>

                <p className="text-[10px] uppercase font-bold text-gray-400">
                  Location
                </p>

                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {network.location}
                </p>

              </div>

            </div>

            <div className="flex items-start gap-3">

              <Mail className="w-4 h-4 text-gray-400 mt-0.5" />

              <div>

                <p className="text-[10px] uppercase font-bold text-gray-400">
                  Contact Email
                </p>

                <p className="text-sm font-semibold text-gray-800 mt-1">
                  {network.email}
                </p>

              </div>

            </div>

          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">

            <p className="text-[10px] uppercase font-bold text-gray-400">
              Network Description
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mt-2 max-w-4xl">
              {network.description}
            </p>

          </div>

        </div>

      </section>

      {/* RECENT MANAGEMENT ACTIVITY */}
      <section className="bg-white border border-gray-200 rounded-2xl">

        <div className="p-6 border-b border-gray-100">

          <h2 className="text-lg font-bold text-gray-900">
            Recent Management Activity
          </h2>

          <p className="text-xs text-gray-500 mt-1">
            Recent actions performed by the network focal point.
          </p>

        </div>

        <div className="divide-y divide-gray-100">

          <div className="p-5 flex items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CalendarPlus className="w-4 h-4" />
            </div>

            <div className="flex-1">

              <p className="text-sm font-semibold text-gray-900">
                Youth Leadership Workshop created
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Activity scheduled for 15 August 2026
              </p>

            </div>

            <span className="text-xs text-gray-400">
              2h ago
            </span>

          </div>

          <div className="p-5 flex items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>

            <div className="flex-1">

              <p className="text-sm font-semibold text-gray-900">
                5 volunteer applications approved
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Applications reviewed from approval queue
              </p>

            </div>

            <span className="text-xs text-gray-400">
              Yesterday
            </span>

          </div>

          <div className="p-5 flex items-center gap-4">

            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>

            <div className="flex-1">

              <p className="text-sm font-semibold text-gray-900">
                Network announcement broadcast
              </p>

              <p className="text-xs text-gray-500 mt-1">
                Message delivered to 86 volunteers
              </p>

            </div>

            <span className="text-xs text-gray-400">
              2 days ago
            </span>

          </div>

        </div>

      </section>

      {/* CREATE ACTIVITY MODAL */}
      {showActivityModal && (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl">

            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>

                <p className="text-xs font-bold text-blue-600 uppercase">
                  Network Activity
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  Create New Activity
                </h2>

              </div>

              <button
                onClick={() => setShowActivityModal(false)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <form
              onSubmit={handleActivitySubmit}
              className="p-6 space-y-5"
            >

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Activity Title
                </label>

                <input
                  required
                  value={activityForm.title}
                  onChange={(event) =>
                    setActivityForm({
                      ...activityForm,
                      title: event.target.value,
                    })
                  }
                  placeholder="e.g. Youth Leadership Workshop"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Date
                  </label>

                  <input
                    required
                    type="date"
                    value={activityForm.date}
                    onChange={(event) =>
                      setActivityForm({
                        ...activityForm,
                        date: event.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Location
                  </label>

                  <input
                    required
                    value={activityForm.location}
                    onChange={(event) =>
                      setActivityForm({
                        ...activityForm,
                        location: event.target.value,
                      })
                    }
                    placeholder="Activity location"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                  />

                </div>

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  value={activityForm.description}
                  onChange={(event) =>
                    setActivityForm({
                      ...activityForm,
                      description: event.target.value,
                    })
                  }
                  placeholder="Describe the activity..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm resize-none"
                />

              </div>

              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setShowActivityModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold"
                >
                  <Plus className="w-4 h-4" />
                  Create Activity
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* BROADCAST MODAL */}
      {showBroadcastModal && (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl">

            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>

                <p className="text-xs font-bold text-purple-600 uppercase">
                  Network Communication
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  Broadcast Message
                </h2>

              </div>

              <button
                onClick={() => setShowBroadcastModal(false)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <form
              onSubmit={handleBroadcast}
              className="p-6 space-y-5"
            >

              <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">

                <div className="flex items-center gap-2">

                  <Users className="w-4 h-4 text-purple-600" />

                  <p className="text-xs font-bold text-purple-800">
                    Recipient Group
                  </p>

                </div>

                <p className="text-sm font-semibold text-gray-900 mt-1">
                  All Network Volunteers — 86 recipients
                </p>

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Subject
                </label>

                <input
                  required
                  value={broadcastForm.subject}
                  onChange={(event) =>
                    setBroadcastForm({
                      ...broadcastForm,
                      subject: event.target.value,
                    })
                  }
                  placeholder="Message subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                />

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  required
                  rows="5"
                  value={broadcastForm.message}
                  onChange={(event) =>
                    setBroadcastForm({
                      ...broadcastForm,
                      message: event.target.value,
                    })
                  }
                  placeholder="Write your announcement..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm resize-none"
                />

              </div>

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowBroadcastModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-sm font-bold"
                >
                  <Send className="w-4 h-4" />
                  Send Broadcast
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* NETWORK INFORMATION MODAL */}
      {showNetworkModal && (

        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl">

            <div className="p-6 border-b border-gray-100 flex items-center justify-between">

              <div>

                <p className="text-xs font-bold text-orange-600 uppercase">
                  Network Settings
                </p>

                <h2 className="text-xl font-extrabold text-gray-900 mt-1">
                  Edit Network Information
                </h2>

              </div>

              <button
                onClick={() => setShowNetworkModal(false)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>

            </div>

            <form
              onSubmit={handleNetworkSave}
              className="p-6 space-y-5"
            >

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Network Name
                </label>

                <input
                  required
                  value={network.name}
                  onChange={(event) =>
                    setNetwork({
                      ...network,
                      name: event.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                />

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Focal Point
                </label>

                <input
                  value={network.focalPoint}
                  onChange={(event) =>
                    setNetwork({
                      ...network,
                      focalPoint: event.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                />

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Location
                  </label>

                  <input
                    value={network.location}
                    onChange={(event) =>
                      setNetwork({
                        ...network,
                        location: event.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                  />

                </div>

                <div>

                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Contact Email
                  </label>

                  <input
                    type="email"
                    value={network.email}
                    onChange={(event) =>
                      setNetwork({
                        ...network,
                        email: event.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm"
                  />

                </div>

              </div>

              <div>

                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  value={network.description}
                  onChange={(event) =>
                    setNetwork({
                      ...network,
                      description: event.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm resize-none"
                />

              </div>

              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowNetworkModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold"
                >
                  <Save className="w-4 h-4" />

                  {saved ? "Saved!" : "Save Changes"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default NetworkManagement;
