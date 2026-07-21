function Register() {


  return (

    <div className="
      min-h-screen
      bg-gray-100
      py-10
    ">


      <div className="
        max-w-3xl
        mx-auto
        bg-white
        rounded-xl
        shadow-lg
        p-8
      ">


        <h1 className="
          text-3xl
          font-bold
          text-blue-900
          mb-6
        ">

          Youth Registration

        </h1>



        <div className="
          grid
          md:grid-cols-2
          gap-5
        ">


          <input
            className="
              border
              p-3
              rounded-lg
            "
            placeholder="Full Name"
          />


          <input
            className="
              border
              p-3
              rounded-lg
            "
            placeholder="CID / NDI ID"
          />


          <input
            className="
              border
              p-3
              rounded-lg
            "
            placeholder="Date of Birth"
            type="date"
          />


          <input
            className="
              border
              p-3
              rounded-lg
            "
            placeholder="Phone Number"
          />


          <input
            className="
              border
              p-3
              rounded-lg
            "
            placeholder="Email Address"
          />


          <select
            className="
              border
              p-3
              rounded-lg
            "
          >

            <option>
              Select Dzongkhag
            </option>

            <option>
              Thimphu
            </option>

            <option>
              Paro
            </option>

            <option>
              Haa
            </option>

            <option>
              Gelephu
            </option>

          </select>


        </div>



        <textarea

          className="
            border
            p-3
            rounded-lg
            w-full
            mt-5
          "

          placeholder="Skills and Interests"

          rows={4}

        />



        <button

          className="
            mt-6
            bg-blue-900
            text-white
            px-8
            py-3
            rounded-lg
            hover:bg-blue-800
          "

        >

          Create Account

        </button>


      </div>


    </div>

  )

}


export default Register