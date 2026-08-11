import { useState } from "react";
import {
  Database,
  Plus,
  Search,
  Pencil,
  Trash2,
  Tag,
  Award,
  HeartHandshake,
  BookOpen,
  GraduationCap,
  X,
  Check,
} from "lucide-react";

const INITIAL_DATA = {
  "Achievement Types": [
    "Volunteer Excellence",
    "Youth Leadership",
    "Community Service",
    "Programme Participation",
  ],

  "Service Categories": [
    "Community Service",
    "Environmental Service",
    "Education Support",
    "Digital Literacy",
  ],

  "Programme Categories": [
    "Youth Development",
    "Leadership",
    "Employment",
    "Health & Wellbeing",
    "Skills Development",
  ],

  "Education Levels": [
    "Primary",
    "Secondary",
    "Higher Secondary",
    "Diploma",
    "Bachelor",
    "Postgraduate",
  ],
};

const CATEGORY_ICONS = {
  "Achievement Types": Award,
  "Service Categories": HeartHandshake,
  "Programme Categories": BookOpen,
  "Education Levels": GraduationCap,
};

const MasterData = () => {
  const [activeCategory, setActiveCategory] =
    useState("Achievement Types");

  const [data, setData] = useState(INITIAL_DATA);

  const [search, setSearch] = useState("");

  const [newItem, setNewItem] = useState("");

  const [editingItem, setEditingItem] = useState(null);

  const [editValue, setEditValue] = useState("");

  const [error, setError] = useState("");

  const Icon = CATEGORY_ICONS[activeCategory];

  /* =========================================================
     FILTER ITEMS
  ========================================================= */

  const filteredItems = data[activeCategory].filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  /* =========================================================
     ADD ITEM
  ========================================================= */

  const addItem = () => {
    const value = newItem.trim();

    setError("");

    if (!value) {
      setError("Please enter a value.");
      return;
    }

    const exists = data[activeCategory].some(
      (item) => item.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      setError("This value already exists.");
      return;
    }

    setData((prev) => ({
      ...prev,
      [activeCategory]: [
        ...prev[activeCategory],
        value,
      ],
    }));

    setNewItem("");
  };

  /* =========================================================
     DELETE ITEM
  ========================================================= */

  const deleteItem = (item) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${item}"?`
    );

    if (!confirmed) return;

    setData((prev) => ({
      ...prev,
      [activeCategory]: prev[activeCategory].filter(
        (value) => value !== item
      ),
    }));
  };

  /* =========================================================
     START EDIT
  ========================================================= */

  const startEdit = (item) => {
    setEditingItem(item);
    setEditValue(item);
    setError("");
  };

  /* =========================================================
     CANCEL EDIT
  ========================================================= */

  const cancelEdit = () => {
    setEditingItem(null);
    setEditValue("");
    setError("");
  };

  /* =========================================================
     SAVE EDIT
  ========================================================= */

  const saveEdit = () => {
    const value = editValue.trim();

    setError("");

    if (!value) {
      setError("Value cannot be empty.");
      return;
    }

    const duplicate = data[activeCategory].some(
      (item) =>
        item !== editingItem &&
        item.toLowerCase() === value.toLowerCase()
    );

    if (duplicate) {
      setError("This value already exists.");
      return;
    }

    setData((prev) => ({
      ...prev,
      [activeCategory]: prev[activeCategory].map(
        (item) =>
          item === editingItem ? value : item
      ),
    }));

    setEditingItem(null);
    setEditValue("");
  };

  return (
    <div className="space-y-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div>
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
            <Database className="w-6 h-6 text-blue-600" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Master Data
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Configure national reference data used throughout
              the Youth Portal System
            </p>
          </div>

        </div>
      </div>

      {/* =====================================================
          INFORMATION BANNER
      ===================================================== */}

      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

        <div className="flex items-start gap-3">

          <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
            <Database className="w-5 h-5 text-blue-600" />
          </div>

          <div>

            <h3 className="text-sm font-bold text-blue-900">
              PYCD Master Data Management
            </h3>

            <p className="text-xs text-blue-700 mt-1 leading-relaxed">
              These reference values are shared across Youth
              Centres, programmes, volunteer activities, reporting
              and analytics. Changes should only be made by
              authorised PYCD users.
            </p>

          </div>

        </div>

      </div>

      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {Object.keys(data).map((category) => {
          const CategoryIcon = CATEGORY_ICONS[category];

          const active = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setSearch("");
                setNewItem("");
                cancelEdit();
              }}
              className={`
                text-left
                p-5
                rounded-2xl
                border
                transition
                ${
                  active
                    ? "bg-blue-50 border-blue-500 ring-2 ring-blue-500/10"
                    : "bg-white border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                }
              `}
            >

              <div
                className={`
                  w-10
                  h-10
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }
                `}
              >
                <CategoryIcon className="w-5 h-5" />
              </div>

              <h3 className="text-sm font-bold text-gray-900 mt-4">
                {category}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {data[category].length} configured values
              </p>

            </button>
          );
        })}

      </div>

      {/* =====================================================
          DATA MANAGEMENT
      ===================================================== */}

      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

        {/* ===================================================
            MANAGEMENT HEADER
        =================================================== */}

        <div className="p-6 border-b border-gray-100">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div className="flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>

              <div>

                <h2 className="text-lg font-bold text-gray-900">
                  {activeCategory}
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                  Manage national configuration values
                </p>

              </div>

            </div>

            {/* Search */}

            <div className="relative w-full md:w-72">

              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />

              <input
                type="text"
                placeholder="Search values..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  pl-9
                  pr-4
                  py-2.5
                  rounded-xl
                  border
                  border-gray-200
                  text-sm
                  focus:outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
              />

            </div>

          </div>

        </div>

        {/* ===================================================
            ADD NEW VALUE
        =================================================== */}

        <div className="p-5 bg-gray-50 border-b border-gray-100">

          <div className="flex flex-col sm:flex-row gap-3">

            <input
              type="text"
              placeholder={`Add new ${activeCategory.toLowerCase()}...`}
              value={newItem}
              onChange={(e) => {
                setNewItem(e.target.value);
                setError("");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addItem();
                }
              }}
              className="
                flex-1
                px-4
                py-2.5
                rounded-xl
                border
                border-gray-200
                bg-white
                text-sm
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
              "
            />

            <button
              type="button"
              onClick={addItem}
              className="
                px-5
                py-2.5
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                font-semibold
                hover:bg-blue-700
                transition
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <Plus className="w-4 h-4" />
              Add Value
            </button>

          </div>

          {error && (
            <p className="text-xs text-red-600 font-medium mt-2">
              {error}
            </p>
          )}

        </div>

        {/* ===================================================
            LIST HEADER
        =================================================== */}

        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">

          <div className="flex items-center justify-between">

            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Reference Values
            </p>

            <p className="text-xs text-gray-400">
              {filteredItems.length} of{" "}
              {data[activeCategory].length}
            </p>

          </div>

        </div>

        {/* ===================================================
            LIST
        =================================================== */}

        <div className="divide-y divide-gray-100">

          {filteredItems.map((item, index) => {

            const isEditing = editingItem === item;

            return (
              <div
                key={item}
                className="
                  p-5
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                  hover:bg-gray-50
                  transition
                "
              >

                {/* VALUE */}

                <div className="flex items-center gap-4 min-w-0">

                  <div className="
                    w-9
                    h-9
                    rounded-lg
                    bg-gray-100
                    flex
                    items-center
                    justify-center
                    text-xs
                    font-bold
                    text-gray-500
                    shrink-0
                  ">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {isEditing ? (

                    <input
                      autoFocus
                      type="text"
                      value={editValue}
                      onChange={(e) => {
                        setEditValue(e.target.value);
                        setError("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          saveEdit();
                        }

                        if (e.key === "Escape") {
                          cancelEdit();
                        }
                      }}
                      className="
                        px-3
                        py-2
                        rounded-lg
                        border
                        border-blue-300
                        text-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        w-full
                        max-w-md
                      "
                    />

                  ) : (

                    <div className="min-w-0">

                      <p className="text-sm font-semibold text-gray-900 truncate">
                        {item}
                      </p>

                      <p className="text-xs text-gray-400 mt-0.5">
                        Active national reference value
                      </p>

                    </div>

                  )}

                </div>

                {/* ACTIONS */}

                <div className="flex items-center gap-2 shrink-0">

                  {isEditing ? (

                    <>
                      <button
                        type="button"
                        onClick={saveEdit}
                        className="
                          px-3
                          py-2
                          rounded-lg
                          bg-green-50
                          text-green-600
                          hover:bg-green-100
                          text-xs
                          font-semibold
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <Check className="w-4 h-4" />
                        Save
                      </button>

                      <button
                        type="button"
                        onClick={cancelEdit}
                        className="
                          px-3
                          py-2
                          rounded-lg
                          bg-gray-100
                          text-gray-600
                          hover:bg-gray-200
                          text-xs
                          font-semibold
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </>

                  ) : (

                    <>
                      <button
                        type="button"
                        onClick={() =>
                          startEdit(item)
                        }
                        className="
                          p-2
                          rounded-lg
                          text-gray-400
                          hover:bg-blue-50
                          hover:text-blue-600
                          transition
                        "
                        title="Edit"
                        aria-label={`Edit ${item}`}
                      >
                        <Pencil className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          deleteItem(item)
                        }
                        className="
                          p-2
                          rounded-lg
                          text-gray-400
                          hover:bg-red-50
                          hover:text-red-600
                          transition
                        "
                        title="Delete"
                        aria-label={`Delete ${item}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </>

                  )}

                </div>

              </div>
            );
          })}

          {/* =================================================
              EMPTY STATE
          ================================================== */}

          {filteredItems.length === 0 && (

            <div className="py-14 text-center">

              <div className="
                w-12
                h-12
                rounded-xl
                bg-gray-100
                mx-auto
                flex
                items-center
                justify-center
              ">
                <Tag className="w-6 h-6 text-gray-400" />
              </div>

              <p className="text-sm font-semibold text-gray-600 mt-3">
                No values found
              </p>

              <p className="text-xs text-gray-400 mt-1">
                Try a different search term or add a new value.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
};

export default MasterData;