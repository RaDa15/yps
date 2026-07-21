import { useState } from "react";

const AppearanceSettings = () => {

  const [theme, setTheme] = useState("nature");
  const [mode, setMode] = useState("light");
  const [opacity, setOpacity] = useState(70);
  const [avatar, setAvatar] = useState("🧑‍🎓");


  const themes = [
    {
      id: "nature",
      name: "Nature",
      emoji: "🌿",
      color: "bg-green-100"
    },
    {
      id: "galaxy",
      name: "Galaxy",
      emoji: "🌌",
      color: "bg-purple-100"
    },
    {
      id: "bhutan",
      name: "Bhutan Heritage",
      emoji: "🏔️",
      color: "bg-yellow-100"
    },
    {
      id: "ocean",
      name: "Ocean",
      emoji: "🌊",
      color: "bg-blue-100"
    },
    {
      id: "floral",
      name: "Floral",
      emoji: "🌸",
      color: "bg-pink-100"
    }
  ];


  const avatars = [
    "🧑‍🎓",
    "👩‍🎓",
    "🏆",
    "🌱",
    "🚀",
    "🎨"
  ];


  return (

    <div className="space-y-6">


      <h2 className="text-2xl font-semibold">
        Appearance Settings
      </h2>



      {/* Dashboard Preview */}

      <div 
        className={`
        rounded-xl p-8 shadow
        ${
          theme === "nature" ? "bg-green-100" :
          theme === "galaxy" ? "bg-purple-100" :
          theme === "bhutan" ? "bg-yellow-100" :
          theme === "ocean" ? "bg-blue-100" :
          "bg-pink-100"
        }
        `}
        style={{
          opacity: opacity / 100
        }}
      >

        <h3 className="text-xl font-bold">
          Dashboard Preview
        </h3>

        <p className="mt-3">
          Welcome back Youth Explorer 👋
        </p>


        <div className="text-5xl mt-4">
          {avatar}
        </div>


      </div>





      {/* Theme Selection */}

      <div className="bg-white p-6 rounded-xl shadow">


        <h3 className="text-lg font-semibold mb-4">
          Choose Dashboard Theme
        </h3>


        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">


          {
            themes.map((item)=>(
              
              <button

                key={item.id}

                onClick={()=>setTheme(item.id)}

                className={`
                p-4 rounded-xl border
                ${item.color}
                ${
                  theme === item.id 
                  ? "ring-2 ring-blue-500"
                  : ""
                }
                `}
              >

                <div className="text-3xl">
                  {item.emoji}
                </div>

                <p className="text-sm mt-2">
                  {item.name}
                </p>


              </button>

            ))
          }


        </div>

      </div>





      {/* Gender Recommendation */}

      <div className="bg-white p-6 rounded-xl shadow">


        <h3 className="text-lg font-semibold">
          Recommended Themes
        </h3>


        <div className="grid md:grid-cols-2 gap-4 mt-4">


          <div className="border rounded-lg p-4">

            <h4 className="font-medium">
              👨 Youth Collection
            </h4>

            <p className="text-gray-500">
              Tech • Adventure • Sports • Mountain
            </p>

          </div>



          <div className="border rounded-lg p-4">

            <h4 className="font-medium">
              👩 Youth Collection
            </h4>

            <p className="text-gray-500">
              Floral • Creative • Nature • Calm
            </p>

          </div>


        </div>


      </div>






      {/* Background Control */}

      <div className="bg-white p-6 rounded-xl shadow">


        <h3 className="text-lg font-semibold">
          Background Customization
        </h3>



        <label className="block mt-4">
          Background Opacity
        </label>


        <input

          type="range"

          min="20"

          max="100"

          value={opacity}

          onChange={(e)=>setOpacity(Number(e.target.value))}

          className="w-full"

        />


        <p>
          {opacity}%
        </p>



      </div>






      {/* Appearance Mode */}

      <div className="bg-white p-6 rounded-xl shadow">


        <h3 className="text-lg font-semibold">
          Display Mode
        </h3>


        <div className="flex gap-4 mt-4">


          <button

          onClick={()=>setMode("light")}

          className={`
          px-5 py-2 rounded-lg border
          ${mode==="light" ? "bg-blue-600 text-white":""}
          `}
          >

          ☀ Light

          </button>




          <button

          onClick={()=>setMode("dark")}

          className={`
          px-5 py-2 rounded-lg border
          ${mode==="dark" ? "bg-blue-600 text-white":""}
          `}
          >

          🌙 Dark

          </button>



        </div>


      </div>






      {/* Avatar */}

      <div className="bg-white p-6 rounded-xl shadow">


        <h3 className="text-lg font-semibold">
          Profile Avatar
        </h3>


        <div className="flex gap-4 mt-4">


          {
            avatars.map((item)=>(

              <button

              key={item}

              onClick={()=>setAvatar(item)}

              className={`
              text-3xl p-3 rounded-lg border
              ${
                avatar===item
                ?"ring-2 ring-blue-500"
                :""
              }
              `}
              >

              {item}

              </button>

            ))
          }


        </div>


      </div>





      <button
      className="
      bg-blue-600 
      text-white
      px-6
      py-3
      rounded-xl
      "
      >

        Save Changes

      </button>



    </div>

  );

};


export default AppearanceSettings;