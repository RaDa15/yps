import { useEffect, useMemo, useState } from "react";
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Pencil,
  Trash2,
  UserCheck,
  UserX,
  X,
  ShieldCheck,
  Building2,
  MapPin,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react";

// ======================================================
// STORAGE
// ======================================================

const STORAGE_KEY = "yps_pycd_users";

// ======================================================
// ROLES
// ======================================================

const ROLES = [
  "PYCD Focal",
  "YC Manager",
  "Youth / Volunteer",
  "Counsellor",
  "Programme Coordinator",
  "Monitoring & Evaluation",
  "System Administrator",
];

// ======================================================
// DZONGKHAGS
// ======================================================

const DZONGKHAGS = [
  "Thimphu",
  "Paro",
  "Chukha",
  "Sarpang",
  "Punakha",
  "Wangdue Phodrang",
  "Bumthang",
  "Mongar",
  "Trashigang",
  "Samdrup Jongkhar",
  "Other",
];

// ======================================================
// INITIAL USERS
// ======================================================

const INITIAL_USERS = [
  {
    id: 1,
    name: "Pema Wangchuk",
    email: "pema.wangchuk@pycd.gov.bt",
    phone: "17123456",
    role: "PYCD Focal",
    dzongkhag: "National",
    centre: "PYCD",
    status: "Active",
    lastLogin: "Today, 09:42 AM",
  },
  {
    id: 2,
    name: "Sonam Dorji",
    email: "sonam.dorji@pycd.gov.bt",
    phone: "17234567",
    role: "YC Manager",
    dzongkhag: "Thimphu",
    centre: "Thimphu Youth Centre",
    status: "Active",
    lastLogin: "Today, 08:30 AM",
  },
  {
    id: 3,
    name: "Karma Tshering",
    email: "karma.tshering@pycd.gov.bt",
    phone: "17345678",
    role: "Counsellor",
    dzongkhag: "Paro",
    centre: "Paro Youth Centre",
    status: "Active",
    lastLogin: "Yesterday",
  },
  {
    id: 4,
    name: "Tashi Choden",
    email: "tashi.choden@pycd.gov.bt",
    phone: "17456789",
    role: "Programme Coordinator",
    dzongkhag: "Chukha",
    centre: "Chukha Youth Centre",
    status: "Inactive",
    lastLogin: "05 Aug 2026",
  },
  {
    id: 5,
    name: "Jigme Namgyel",
    email: "jigme.namgyel@pycd.gov.bt",
    phone: "17567890",
    role: "System Administrator",
    dzongkhag: "National",
    centre: "PYCD",
    status: "Active",
    lastLogin: "Today, 07:15 AM",
  },
];

// ======================================================
// EMPTY FORM
// ======================================================

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  role: "YC Manager",
  dzongkhag: "Thimphu",
  centre: "",
  status: "Active",
};

// ======================================================
// COMPONENT
// ======================================================

const UserManagement = () => {
  const [users, setUsers] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);

      return saved
        ? JSON.parse(saved)
        : INITIAL_USERS;
    } catch {
      return INITIAL_USERS;
    }
  });

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingUser, setEditingUser] = useState(null);

  const [form, setForm] = useState(EMPTY_FORM);

  const [deleteUser, setDeleteUser] = useState(null);

  // ====================================================
  // SAVE TO LOCAL STORAGE
  // ====================================================

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(users)
    );
  }, [users]);

  // ====================================================
  // STATISTICS
  // ====================================================

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const nationalUsers = users.filter(
    (user) => user.dzongkhag === "National"
  ).length;

  // ====================================================
  // FILTER USERS
  // ====================================================

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchValue) ||
        user.email.toLowerCase().includes(searchValue) ||
        user.role.toLowerCase().includes(searchValue) ||
        user.centre.toLowerCase().includes(searchValue);

      const matchesRole =
        roleFilter === "All" ||
        user.role === roleFilter;

      const matchesStatus =
        statusFilter === "All" ||
        user.status === statusFilter;

      return (
        matchesSearch &&
        matchesRole &&
        matchesStatus
      );
    });
  }, [
    users,
    search,
    roleFilter,
    statusFilter,
  ]);

  // ====================================================
  // OPEN ADD MODAL
  // ====================================================

  const openAddModal = () => {
    setEditingUser(null);
    setForm(EMPTY_FORM);
    setIsModalOpen(true);
  };

  // ====================================================
  // OPEN EDIT MODAL
  // ====================================================

  const openEditModal = (user) => {
    setEditingUser(user);

    setForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.role,
      dzongkhag: user.dzongkhag,
      centre: user.centre,
      status: user.status,
    });

    setIsModalOpen(true);
  };

  // ====================================================
  // CLOSE MODAL
  // ====================================================

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingUser(null);
    setForm(EMPTY_FORM);
  };

  // ====================================================
  // FORM CHANGE
  // ====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ====================================================
  // SAVE USER
  // ====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.role ||
      !form.dzongkhag
    ) {
      alert(
        "Please complete all required fields."
      );

      return;
    }

    // EDIT
    if (editingUser) {
      setUsers((prev) =>
        prev.map((user) =>
          user.id === editingUser.id
            ? {
                ...user,
                ...form,
              }
            : user
        )
      );

      closeModal();

      return;
    }

    // ADD
    const newUser = {
      id: Date.now(),
      ...form,
      lastLogin: "Never",
    };

    setUsers((prev) => [
      newUser,
      ...prev,
    ]);

    closeModal();
  };

  // ====================================================
  // TOGGLE STATUS
  // ====================================================

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : user
      )
    );
  };

  // ====================================================
  // DELETE USER
  // ====================================================

  const confirmDelete = () => {
    if (!deleteUser) return;

    setUsers((prev) =>
      prev.filter(
        (user) => user.id !== deleteUser.id
      )
    );

    setDeleteUser(null);
  };

  // ====================================================
  // ROLE COLOR
  // ====================================================

  const getRoleStyle = (role) => {
    if (role === "PYCD Focal") {
      return "bg-purple-100 text-purple-700";
    }

    if (role === "System Administrator") {
      return "bg-red-100 text-red-700";
    }

    if (role === "YC Manager") {
      return "bg-blue-100 text-blue-700";
    }

    if (role === "Counsellor") {
      return "bg-green-100 text-green-700";
    }

    if (role === "Programme Coordinator") {
      return "bg-orange-100 text-orange-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div className="space-y-6">

      {/* ================================================
          HEADER
      ================================================= */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">

              <Users className="w-6 h-6" />

            </div>

            <div>

              <h1 className="text-2xl font-bold text-gray-900">
                User Management
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Manage national users, roles, access and account status
              </p>

            </div>

          </div>

        </div>

        <button
          onClick={openAddModal}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
        >
          <UserPlus className="w-4 h-4" />
          Add User
        </button>

      </div>

      {/* ================================================
          SUMMARY
      ================================================= */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">

            <Users className="w-5 h-5" />

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Total Users
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {totalUsers}
          </h2>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">

            <UserCheck className="w-5 h-5" />

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Active Users
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {activeUsers}
          </h2>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">

            <UserX className="w-5 h-5" />

          </div>

          <p className="text-sm text-gray-500 mt-4">
            Inactive Users
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {inactiveUsers}
          </h2>

        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">

            <ShieldCheck className="w-5 h-5" />

          </div>

          <p className="text-sm text-gray-500 mt-4">
            National Access
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {nationalUsers}
          </h2>

        </div>

      </div>

      {/* ================================================
          USER MANAGEMENT
      ================================================= */}

      <div className="bg-white border border-gray-200 rounded-2xl">

        {/* TOOLBAR */}

        <div className="p-5 border-b border-gray-100">

          <div className="flex flex-col lg:flex-row gap-3">

            {/* SEARCH */}

            <div className="relative flex-1">

              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search users, email, role or centre..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            {/* ROLE FILTER */}

            <div className="relative">

              <Filter className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

              <select
                value={roleFilter}
                onChange={(e) =>
                  setRoleFilter(e.target.value)
                }
                className="appearance-none w-full lg:w-52 pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="All">
                  All Roles
                </option>

                {ROLES.map((role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {role}
                  </option>
                ))}

              </select>

              <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

            </div>

            {/* STATUS FILTER */}

            <div className="relative">

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                className="appearance-none w-full lg:w-40 px-4 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >

                <option value="All">
                  All Status
                </option>

                <option value="Active">
                  Active
                </option>

                <option value="Inactive">
                  Inactive
                </option>

              </select>

              <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

            </div>

          </div>

        </div>

        {/* TABLE */}

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50/70">

                <th className="text-left px-5 py-4 font-semibold text-gray-500">
                  User
                </th>

                <th className="text-left px-5 py-4 font-semibold text-gray-500">
                  Role
                </th>

                <th className="text-left px-5 py-4 font-semibold text-gray-500">
                  Location
                </th>

                <th className="text-left px-5 py-4 font-semibold text-gray-500">
                  Status
                </th>

                <th className="text-left px-5 py-4 font-semibold text-gray-500">
                  Last Login
                </th>

                <th className="text-right px-5 py-4 font-semibold text-gray-500">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >

                  {/* USER */}

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">

                        {user.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}

                      </div>

                      <div>

                        <p className="font-semibold text-gray-900">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-500 mt-0.5">
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* ROLE */}

                  <td className="px-5 py-4">

                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-bold ${getRoleStyle(
                        user.role
                      )}`}
                    >
                      {user.role}
                    </span>

                  </td>

                  {/* LOCATION */}

                  <td className="px-5 py-4">

                    <div className="flex items-start gap-2">

                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />

                      <div>

                        <p className="font-medium text-gray-800">
                          {user.dzongkhag}
                        </p>

                        <p className="text-xs text-gray-500">
                          {user.centre}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* STATUS */}

                  <td className="px-5 py-4">

                    <button
                      onClick={() =>
                        toggleStatus(user.id)
                      }
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                      title="Click to change status"
                    >

                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-600"
                            : "bg-gray-400"
                        }`}
                      />

                      {user.status}

                    </button>

                  </td>

                  {/* LAST LOGIN */}

                  <td className="px-5 py-4 text-gray-500">
                    {user.lastLogin}
                  </td>

                  {/* ACTIONS */}

                  <td className="px-5 py-4">

                    <div className="flex items-center justify-end gap-1">

                      <button
                        onClick={() =>
                          openEditModal(user)
                        }
                        className="p-2 rounded-lg text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition"
                        title="Edit user"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() =>
                          toggleStatus(user.id)
                        }
                        className={`p-2 rounded-lg transition ${
                          user.status === "Active"
                            ? "text-gray-400 hover:bg-orange-50 hover:text-orange-600"
                            : "text-gray-400 hover:bg-green-50 hover:text-green-600"
                        }`}
                        title={
                          user.status === "Active"
                            ? "Deactivate user"
                            : "Activate user"
                        }
                      >

                        {user.status === "Active" ? (
                          <UserX className="w-4 h-4" />
                        ) : (
                          <UserCheck className="w-4 h-4" />
                        )}

                      </button>

                      <button
                        onClick={() =>
                          setDeleteUser(user)
                        }
                        className="p-2 rounded-lg text-gray-400 hover:bg-red-50 hover:text-red-600 transition"
                        title="Delete user"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* EMPTY */}

        {filteredUsers.length === 0 && (

          <div className="py-14 text-center">

            <Users className="w-10 h-10 text-gray-300 mx-auto" />

            <p className="font-semibold text-gray-600 mt-3">
              No users found
            </p>

            <p className="text-sm text-gray-400 mt-1">
              Try changing your search or filters.
            </p>

          </div>

        )}

        {/* FOOTER */}

        <div className="px-5 py-4 border-t border-gray-100">

          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {filteredUsers.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-700">
              {users.length}
            </span>{" "}
            users
          </p>

        </div>

      </div>

      {/* ================================================
          ADD / EDIT MODAL
      ================================================= */}

      {isModalOpen && (

        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />

          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">

            {/* MODAL HEADER */}

            <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">

              <div>

                <h2 className="text-lg font-bold text-gray-900">

                  {editingUser
                    ? "Edit User"
                    : "Create New User"}

                </h2>

                <p className="text-xs text-gray-500 mt-1">

                  {editingUser
                    ? "Update user account and access information."
                    : "Create a new account for the Youth Portal System."}

                </p>

              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            {/* FORM */}

            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* NAME */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>

                  <div className="relative">

                    <Users className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                </div>

                {/* EMAIL */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>

                  <div className="relative">

                    <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="name@pycd.gov.bt"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                </div>

                {/* PHONE */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <div className="relative">

                    <Phone className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="17XXXXXX"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                </div>

                {/* ROLE */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    System Role *
                  </label>

                  <div className="relative">

                    <ShieldCheck className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

                    <select
                      name="role"
                      value={form.role}
                      onChange={handleChange}
                      className="appearance-none w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >

                      {ROLES.map((role) => (

                        <option
                          key={role}
                          value={role}
                        >
                          {role}
                        </option>

                      ))}

                    </select>

                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

                  </div>

                </div>

                {/* DZONGKHAG */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dzongkhag *
                  </label>

                  <div className="relative">

                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

                    <select
                      name="dzongkhag"
                      value={form.dzongkhag}
                      onChange={handleChange}
                      className="appearance-none w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >

                      {DZONGKHAGS.map((dzongkhag) => (

                        <option
                          key={dzongkhag}
                          value={dzongkhag}
                        >
                          {dzongkhag}
                        </option>

                      ))}

                    </select>

                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />

                  </div>

                </div>

                {/* CENTRE */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Youth Centre
                  </label>

                  <div className="relative">

                    <Building2 className="absolute left-3 top-3 w-4 h-4 text-gray-400" />

                    <input
                      name="centre"
                      value={form.centre}
                      onChange={handleChange}
                      placeholder="e.g. Thimphu Youth Centre"
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                  </div>

                </div>

                {/* STATUS */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Status
                  </label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <option value="Active">
                      Active
                    </option>

                    <option value="Inactive">
                      Inactive
                    </option>

                  </select>

                </div>

              </div>

              {/* NOTE */}

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">

                <div className="flex gap-3">

                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />

                  <div>

                    <p className="text-sm font-semibold text-blue-900">
                      Role-based access
                    </p>

                    <p className="text-xs text-blue-700 mt-1">
                      The selected role will determine which modules and
                      functions this user can access. Detailed permissions
                      will be configured through Role & Access Control.
                    </p>

                  </div>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={closeModal}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
                >

                  {editingUser
                    ? "Save Changes"
                    : "Create User"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

      {/* ================================================
          DELETE CONFIRMATION
      ================================================= */}

      {deleteUser && (

        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">

          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setDeleteUser(null)}
          />

          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6">

            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">

              <Trash2 className="w-6 h-6" />

            </div>

            <h2 className="text-lg font-bold text-gray-900 mt-4">
              Delete User?
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Are you sure you want to delete{" "}
              <span className="font-semibold text-gray-700">
                {deleteUser.name}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3 mt-6">

              <button
                onClick={() => setDeleteUser(null)}
                className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700"
              >
                Delete User
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default UserManagement;