const Footer = () => {


  return (

    <footer className="
    bg-gray-100
    border-t
    border-gray-200
    py-16
    ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-10
        ">





          {/* Brand */}


          <div className="
          md:col-span-1
          ">


            <h3 className="
            text-2xl
            font-bold
            text-blue-700
            ">

              YPS

            </h3>



            <p className="
            mt-4
            text-gray-600
            text-sm
            leading-relaxed
            ">

              Empowering Bhutanese Youth
              Through Digital Innovation.

            </p>



            <p className="
            mt-6
            text-sm
            text-gray-500
            ">

              © 2026 Royal Government of Bhutan.
              All Rights Reserved.

            </p>


          </div>








          {/* Quick Links */}


          <div>


            <h4 className="
            font-bold
            text-blue-700
            mb-5
            ">

              Quick Links

            </h4>


            <ul className="
            space-y-3
            text-gray-600
            text-sm
            ">


              <li className="hover:text-blue-700 cursor-pointer">
                Home
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Programmes
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Youth Centres
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Opportunities
              </li>


            </ul>


          </div>








          {/* Legal */}


          <div>


            <h4 className="
            font-bold
            text-blue-700
            mb-5
            ">

              Legal

            </h4>


            <ul className="
            space-y-3
            text-gray-600
            text-sm
            ">


              <li className="hover:text-blue-700 cursor-pointer">
                Privacy Policy
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Terms of Service
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Accessibility
              </li>


            </ul>


          </div>








          {/* Support */}


          <div>


            <h4 className="
            font-bold
            text-blue-700
            mb-5
            ">

              Support

            </h4>


            <ul className="
            space-y-3
            text-gray-600
            text-sm
            ">


              <li className="hover:text-blue-700 cursor-pointer">
                Contact Us
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Feedback
              </li>


              <li className="hover:text-blue-700 cursor-pointer">
                Help Centre
              </li>


            </ul>


          </div>






        </div>





        {/* Bottom Line */}


        <div className="
        mt-12
        pt-6
        border-t
        border-gray-200
        text-center
        text-sm
        text-gray-500
        ">


          Built for Bhutanese Youth Development


        </div>



      </div>



    </footer>


  );


};


export default Footer;