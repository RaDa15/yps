import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white">

      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 md:py-12 lg:px-8">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="sm:col-span-2 lg:col-span-1">

            <h3 className="text-2xl font-bold text-blue-700">
              YPS
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
              Empowering Bhutanese Youth
              Through Digital Innovation.
            </p>

            <p className="mt-6 text-sm text-gray-500">
              © 2026 Royal Government of Bhutan.
              <br />
              All Rights Reserved.
            </p>

          </div>


          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>

            <h4 className="mb-5 font-bold text-blue-700">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-blue-700"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#programmes"
                  className="transition-colors hover:text-blue-700"
                >
                  Programmes
                </a>
              </li>

              <li>
                <a
                  href="#youth-centres"
                  className="transition-colors hover:text-blue-700"
                >
                  Youth Centres
                </a>
              </li>

              <li>
                <a
                  href="#opportunities"
                  className="transition-colors hover:text-blue-700"
                >
                  Opportunities
                </a>
              </li>

            </ul>

          </div>


          {/* =================================================
              LEGAL
          ================================================= */}

          <div>

            <h4 className="mb-5 font-bold text-blue-700">
              Legal
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <button
                  type="button"
                  className="transition-colors hover:text-blue-700"
                >
                  Privacy Policy
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="transition-colors hover:text-blue-700"
                >
                  Terms of Service
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="transition-colors hover:text-blue-700"
                >
                  Accessibility
                </button>
              </li>

            </ul>

          </div>


          {/* =================================================
              SUPPORT
          ================================================= */}

          <div>

            <h4 className="mb-5 font-bold text-blue-700">
              Support
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">

              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-blue-700"
                >
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#feedback"
                  className="transition-colors hover:text-blue-700"
                >
                  Feedback
                </a>
              </li>

              <li>
                <a
                  href="#help"
                  className="transition-colors hover:text-blue-700"
                >
                  Help Centre
                </a>
              </li>

            </ul>


            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div className="mt-6">

              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
                Follow Us
              </p>

              <div className="flex items-center gap-2">

                {/* =================================================
                    FACEBOOK
                ================================================= */}

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-500
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-100
                    hover:text-blue-600
                  "
                >
                  <FaFacebookF className="h-4 w-4" />
                </a>


                {/* =================================================
                    INSTAGRAM
                ================================================= */}

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-500
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-pink-200
                    hover:bg-pink-100
                    hover:text-pink-600
                  "
                >
                  <FaInstagram className="h-4 w-4" />
                </a>


                {/* =================================================
                    YOUTUBE
                ================================================= */}

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  title="YouTube"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-500
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-red-200
                    hover:bg-red-100
                    hover:text-red-600
                  "
                >
                  <FaYoutube className="h-4 w-4" />
                </a>


                {/* =================================================
                    LINKEDIN
                ================================================= */}

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-gray-200
                    bg-gray-50
                    text-gray-500
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-blue-200
                    hover:bg-blue-100
                    hover:text-blue-600
                  "
                >
                  <FaLinkedinIn className="h-4 w-4" />
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            BOTTOM LINE
        =================================================== */}

        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          Built with ❤️ for Bhutanese Youth
        </div>

      </div>

    </footer>
  );
};

export default Footer;