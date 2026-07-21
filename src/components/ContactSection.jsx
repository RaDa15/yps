import {
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";


const ContactSection = () => {


  return (

    <section
    id="contact"
    className="
    py-24
    bg-white
    "
    >


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        <div className="
        grid
        md:grid-cols-2
        gap-12
        items-center
        ">



          {/* Left Content */}


          <div>


            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-blue-700
            ">

              Get in Touch

            </h2>



            <p className="
            mt-5
            text-gray-600
            max-w-lg
            leading-relaxed
            ">

              Have questions about programmes,
              opportunities or technical support?
              Our team is here to help you navigate
              your youth journey.

            </p>





            <div className="
            mt-8
            space-y-5
            ">



              {/* Email */}


              <div className="
              flex
              items-center
              gap-5
              bg-blue-50
              p-5
              rounded-2xl
              ">


                <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                ">

                  <Mail size={22}/>

                </div>



                <div>

                  <h4 className="
                  font-semibold
                  text-blue-700
                  ">

                    Email Us

                  </h4>


                  <p className="
                  text-gray-600
                  text-sm
                  ">

                    support@yps.gov.bt

                  </p>

                </div>


              </div>





              {/* Phone */}


              <div className="
              flex
              items-center
              gap-5
              bg-blue-50
              p-5
              rounded-2xl
              ">


                <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                ">

                  <Phone size={22}/>

                </div>


                <div>

                  <h4 className="
                  font-semibold
                  text-blue-700
                  ">

                    Call Us

                  </h4>


                  <p className="
                  text-gray-600
                  text-sm
                  ">

                    +975 2 334455

                  </p>


                </div>


              </div>






              {/* Location */}


              <div className="
              flex
              items-center
              gap-5
              bg-blue-50
              p-5
              rounded-2xl
              ">


                <div className="
                w-12
                h-12
                rounded-xl
                bg-blue-600
                text-white
                flex
                items-center
                justify-center
                ">


                  <MapPin size={22}/>


                </div>



                <div>


                  <h4 className="
                  font-semibold
                  text-blue-700
                  ">

                    Visit Us

                  </h4>



                  <p className="
                  text-gray-600
                  text-sm
                  ">

                    Ministry of Education & Skills Development,
                    Thimphu, Bhutan

                  </p>


                </div>


              </div>



            </div>


          </div>








          {/* Contact Form */}


          <div className="
          bg-white
          rounded-3xl
          p-8
          shadow-xl
          border
          border-gray-100
          ">



            <form className="
            space-5
            ">


              <div>


                <label className="
                text-sm
                font-semibold
                text-gray-700
                ">

                  Full Name

                </label>


                <input

                type="text"

                placeholder="Enter your name"

                className="
                mt-2
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "

                />

              </div>





              <div>


                <label className="
                text-sm
                font-semibold
                text-gray-700
                ">

                  Email Address

                </label>


                <input

                type="email"

                placeholder="email@example.bt"

                className="
                mt-2
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "

                />


              </div>






              <div>


                <label className="
                text-sm
                font-semibold
                text-gray-700
                ">

                  Message

                </label>


                <textarea

                rows="5"

                placeholder="Write your message..."

                className="
                mt-2
                w-full
                px-4
                py-3
                rounded-xl
                border
                border-gray-200
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                "

                />

              </div>







              <button

              className="
              w-full
              bg-blue-700
              text-white
              py-4
              rounded-xl
              font-semibold
              flex
              items-center
              justify-center
              gap-3
              hover:bg-blue-800
              transition
              "

              >

                Send Message

                <Send size={18}/>

              </button>



            </form>



          </div>




        </div>


      </div>


    </section>


  );

};


export default ContactSection;