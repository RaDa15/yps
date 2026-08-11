import { useState } from "react";
import {
  Plus,
  Megaphone,
  Database,
  Settings,
  Users,
  ShieldCheck,
  UserCog,
  Layers,
  Bell,
  Lock,
  Search,
  Pencil,
  UserX,
  UserCheck,
  X,
  Check,
} from "lucide-react";

/* =========================================================
   QUICK ACTIONS
========================================================= */

const ACTIONS = [
  {
    title: "Create National Programme",
    description:
      "Launch national youth programmes and initiatives",
    icon: Plus,
    color: "blue",
  },

  {
    title: "Broadcast Notification",
    description:
      "Send announcements to Youth Centres and volunteers",
    icon: Megaphone,
    color: "purple",
  },

  {
    title: "Manage Master Data",
    description:
      "Configure categories, achievements and services",
    icon: Database,
    color: "green",
  },

  {
    title: "System Settings",
    description:
      "Configure system preferences and access controls",
    icon: Settings,
    color: "orange",
  },
];

/* =========================================================
   USER DATA
========================================================= */

const INITIAL_USERS = [
  {
    id: 1,
    name: "Karma Wangchuk",
    email: "karma@pycd.gov.bt",
    role: "PYCD Focal",
    organisation: "PYCD",
    status: "Active",
  },

  {
    id: 2,
    name: "Pema Dorji",
    email: "pema@pycd.gov.bt",
    role: "YC Manager",
    organisation: "Thimphu Youth Centre",
    status: "Active",
  },

  {
    id: 3,
    name: "Sonam Choden",
    email: "sonam@pycd.gov.bt",
    role: "YC Manager",
    organisation: "Paro Youth Centre",
    status: "Active",
  },

  {
    id: 4,
    name: "Tashi Dorji",
    email: "tashi@pycd.gov.bt",
    role: "Programme Officer",
    organisation: "PYCD",
    status: "Active",
  },

  {
    id: 5,
    name: "Dechen Wangmo",
    email: "dechen@pycd.gov.bt",
    role: "Counsellor",
    organisation: "Thimphu Youth Centre",
    status: "Inactive",
  },
];

/* =========================================================
   ROLE OPTIONS
========================================================= */

const ROLES = [
  "PYCD Focal",
  "YC Manager",
  "Programme Officer",
  "Counsellor",
  "Volunteer Coordinator",
  "Youth",
];

/* =========================================================
   COLOR HELPERS
========================================================= */

const actionStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    button: "bg-blue-600 hover:bg-blue-700",
  },

  purple: {
    icon: "bg-purple-50 text-purple-600",
    button: "bg-purple-600 hover:bg-purple-700",
  },

  green: {
    icon: "bg-green-50 text-green-600",
    button: "bg-green-600 hover:bg-green-700",
  },

  orange: {
    icon: "bg-orange-50 text-orange-600",
    button: "bg-orange-600 hover:bg-orange-700",
  },
};

/* =========================================================
   COMPONENT
========================================================= */

const SystemManagement = () => {
  const [users, setUsers] = useState(INITIAL_USERS);

  const [search, setSearch] = useState("");

  const [roleFilter, setRoleFilter] = useState("All Roles");

  const [statusFilter, setStatusFilter] =
    useState("All Status");

  const [editingUser, setEditingUser] = useState(null);

  const [editRole, setEditRole] = useState("");

  /* =======================================================
     FILTER USERS
  ======================================================= */

  const filteredUsers = users.filter((user) => {
    const searchMatch =
      user.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.email
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      user.organisation
        .toLowerCase()
        .includes(search.toLowerCase());

    const roleMatch =
      roleFilter === "All Roles" ||
      user.role === roleFilter;

    const statusMatch =
      statusFilter === "All Status" ||
      user.status === statusFilter;

    return searchMatch && roleMatch && statusMatch;
  });

  /* =======================================================
     USER COUNTERS
  ======================================================= */

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const inactiveUsers = users.filter(
    (user) => user.status === "Inactive"
  ).length;

  const roleCount = new Set(
    users.map((user) => user.role)
  ).size;

  /* =======================================================
     TOGGLE USER STATUS
  ======================================================= */

  const toggleUserStatus = (id) => {
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

  /* =======================================================
     START EDIT
  ======================================================= */

  const startEdit = (user) => {
    setEditingUser(user);
    setEditRole(user.role);
  };

  /* =======================================================
     SAVE ROLE
  ======================================================= */

  const saveRole = () => {
    if (!editingUser || !editRole) return;

    setUsers((prev) =>
      prev.map((user) =>
        user.id === editingUser.id
          ? {
              ...user,
              role: editRole,
            }
          : user
      )
    );

    setEditingUser(null);
    setEditRole("");
  };

  /* =======================================================
     CLOSE MODAL
  ======================================================= */

  const closeModal = () => {
    setEditingUser(null);
    setEditRole("");
  };

  return (
    <div className="space-y-6">

      {/* ===================================================
          HEADER
      =================================================== */}

      <div>
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
            <UserCog className="w-6 h-6 text-blue-600" />
          </div>

          <div>

            <h1 className="text-2xl font-bold text-gray-900">
              User & System Management
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Manage national users, roles, permissions and
              system administration
            </p>

          </div>

        </div>
      </div>

      {/* ===================================================
          QUICK ACTIONS
      =================================================== */}

      <div>

        <div className="flex items-center gap-2 mb-4">

          <Layers className="w-5 h-5 text-blue-600" />

          <h2 className="text-lg font-bold text-gray-900">
            Quick Actions
          </h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

          {ACTIONS.map((item) => {

            const Icon = item.icon;
            const styles = actionStyles[item.color];

            return (
              <button
                key={item.title}
                type="button"
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  p-5
                  text-left
                  hover:border-blue-200
                  hover:shadow-sm
                  transition
                "
              >

                <div
                  className={`
                    w-10
                    h-10
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${styles.icon}
                  `}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-sm font-bold text-gray-900 mt-4">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {item.description}
                </p>

                <p className="text-xs font-semibold text-blue-600 mt-4">
                  Open →
                </p>

              </button>
            );
          })}

        </div>

      </div>

      {/* ===================================================
          USER MANAGEMENT KPI
      =================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {/* Total Users */}

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

        {/* Active Users */}

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

        {/* Inactive */}

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

        {/* Roles */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Active Roles
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-1">
            {roleCount}
          </h2>

        </div>

      </div>

      {/* ===================================================
          USER MANAGEMENT
      =================================================== */}

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        {/* Header */}

        <div className="p-6 border-b border-gray-100">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

            <div>

              <div className="flex items-center gap-2">

                <UserCog className="w-5 h-5 text-blue-600" />

                <h2 className="text-lg font-bold text-gray-900">
                  User Account Management
                </h2>

              </div>

              <p className="text-xs text-gray-500 mt-1">
                Manage user accounts and assign system roles
              </p>

            </div>

            <button
              type="button"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-4
                py-2.5
                bg-blue-600
                hover:bg-blue-700
                text-white
                rounded-xl
                text-sm
                font-semibold
                transition
              "
            >
              <Plus className="w-4 h-4" />
              Add User
            </button>

          </div>

        </div>

        {/* Filters */}

        <div className="p-5 bg-gray-50 border-b border-gray-100">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

            {/* Search */}

            <div className="relative">

              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search users..."
                className="
                  w-full
                  pl-9
                  pr-4
                  py-2.5
                  bg-white
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

            {/* Role */}

            <select
              value={roleFilter}
              onChange={(e) =>
                setRoleFilter(e.target.value)
              }
              className="
                px-4
                py-2.5
                bg-white
                border
                border-gray-200
                rounded-xl
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>All Roles</option>

              {ROLES.map((role) => (
                <option key={role}>
                  {role}
                </option>
              ))}

            </select>

            {/* Status */}

            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(e.target.value)
              }
              className="
                px-4
                py-2.5
                bg-white
                border
                border-gray-200
                rounded-xl
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead>

              <tr className="border-b border-gray-100 bg-gray-50 text-gray-500">

                <th className="text-left px-6 py-3 font-semibold">
                  User
                </th>

                <th className="text-left px-6 py-3 font-semibold">
                  Role
                </th>

                <th className="text-left px-6 py-3 font-semibold">
                  Organisation
                </th>

                <th className="text-left px-6 py-3 font-semibold">
                  Status
                </th>

                <th className="text-right px-6 py-3 font-semibold">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody className="divide-y divide-gray-100">

              {filteredUsers.map((user) => (

                <tr
                  key={user.id}
                  className="hover:bg-gray-50 transition"
                >

                  {/* USER */}

                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="
                        w-10
                        h-10
                        rounded-xl
                        bg-blue-50
                        text-blue-600
                        flex
                        items-center
                        justify-center
                        font-bold
                        text-sm
                      ">
                        {user.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>

                        <p className="font-semibold text-gray-900">
                          {user.name}
                        </p>

                        <p className="text-xs text-gray-400 mt-0.5">
                          {user.email}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* ROLE */}

                  <td className="px-6 py-4">

                    <span className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      bg-purple-50
                      text-purple-700
                      text-xs
                      font-semibold
                    ">
                      {user.role}
                    </span>

                  </td>

                  {/* ORGANISATION */}

                  <td className="px-6 py-4 text-gray-600">
                    {user.organisation}
                  </td>

                  {/* STATUS */}

                  <td className="px-6 py-4">

                    <span
                      className={`
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${
                          user.status === "Active"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500"
                        }
                      `}
                    >
                      {user.status}
                    </span>

                  </td>

                  {/* ACTIONS */}

                  <td className="px-6 py-4">

                    <div className="flex items-center justify-end gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          startEdit(user)
                        }
                        className="
                          p-2
                          rounded-lg
                          text-gray-400
                          hover:bg-blue-50
                          hover:text-blue-600
                          transition
                        "
                        title="Edit role"
                      >
                        <Pencil className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          toggleUserStatus(user.id)
                        }
                        className="
                          p-2
                          rounded-lg
                          text-gray-400
                          hover:bg-orange-50
                          hover:text-orange-600
                          transition
                        "
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

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* Empty */}

        {filteredUsers.length === 0 && (

          <div className="py-14 text-center">

            <Users className="w-9 h-9 text-gray-300 mx-auto" />

            <p className="text-sm font-semibold text-gray-600 mt-3">
              No users found
            </p>

            <p className="text-xs text-gray-400 mt-1">
              Try changing your search or filters.
            </p>

          </div>

        )}

      </div>

      {/* ===================================================
          ACCESS CONTROL
      =================================================== */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

        {/* Role Access */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            Role & Access Control
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Define what each user role can access within
            the Youth Portal System.
          </p>

          <button
            type="button"
            className="
              mt-4
              text-sm
              font-semibold
              text-purple-600
              hover:text-purple-700
            "
          >
            Manage Roles →
          </button>

        </div>

        {/* Security */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            Security Controls
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Manage authentication, password policies and
            account security settings.
          </p>

          <button
            type="button"
            className="
              mt-4
              text-sm
              font-semibold
              text-red-600
              hover:text-red-700
            "
          >
            Security Settings →
          </button>

        </div>

        {/* System Configuration */}

        <div className="bg-white border border-gray-200 rounded-2xl p-5">

          <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>

          <h3 className="font-bold text-gray-900 mt-4">
            System Configuration
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Configure system-wide settings and administrative
            preferences.
          </p>

          <button
            type="button"
            className="
              mt-4
              text-sm
              font-semibold
              text-green-600
              hover:text-green-700
            "
          >
            Configure System →
          </button>

        </div>

      </div>

      {/* ===================================================
          EDIT ROLE MODAL
      =================================================== */}

      {editingUser && (

        <div className="
          fixed
          inset-0
          z-[100]
          bg-black/40
          flex
          items-center
          justify-center
          p-4
        ">

          <div className="
            bg-white
            rounded-2xl
            w-full
            max-w-md
            shadow-xl
          ">

            {/* Modal Header */}

            <div className="
              flex
              items-center
              justify-between
              p-5
              border-b
              border-gray-100
            ">

              <div>

                <h3 className="font-bold text-gray-900">
                  Edit User Role
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {editingUser.name}
                </p>

              </div>

              <button
                type="button"
                onClick={closeModal}
                className="
                  p-2
                  rounded-lg
                  text-gray-400
                  hover:bg-gray-100
                "
              >
                <X className="w-5 h-5" />
              </button>

            </div>

            {/* Modal Body */}

            <div className="p-5">

              <label className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
              ">
                System Role
              </label>

              <select
                value={editRole}
                onChange={(e) =>
                  setEditRole(e.target.value)
                }
                className="
                  w-full
                  px-4
                  py-3
                  border
                  border-gray-200
                  rounded-xl
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              >

                {ROLES.map((role) => (
                  <option key={role}>
                    {role}
                  </option>
                ))}

              </select>

              <div className="
                mt-4
                p-4
                bg-blue-50
                rounded-xl
              ">

                <p className="text-xs text-blue-700">
                  Changing the role will update this user's
                  system permissions.
                </p>

              </div>

            </div>

            {/* Modal Actions */}

            <div className="
              flex
              justify-end
              gap-3
              p-5
              border-t
              border-gray-100
            ">

              <button
                type="button"
                onClick={closeModal}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  bg-gray-100
                  text-gray-600
                  text-sm
                  font-semibold
                  hover:bg-gray-200
                "
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={saveRole}
                className="
                  px-4
                  py-2.5
                  rounded-xl
                  bg-blue-600
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-blue-700
                  flex
                  items-center
                  gap-2
                "
              >
                <Check className="w-4 h-4" />
                Save Changes
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default SystemManagement;