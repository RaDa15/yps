import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

/* =========================================================
   FAQ DATA
========================================================= */

const FAQS = [
  {
    question: "How do I register on the Youth Portal?",
    answer:
      "You can register by selecting the registration option and completing your personal information. Your identity will then be verified securely before your Youth Portal account is activated.",
  },

  {
    question: "What is the Youth ID?",
    answer:
      "The Youth ID is your digital identity within the Youth Portal. It helps you access youth programmes, services, activities and other opportunities available through the platform.",
  },

  {
    question: "How is my identity verified?",
    answer:
      "Your identity can be securely verified using Bhutan's National Digital Identity. This helps ensure that your account information is accurate and protected.",
  },

  {
    question: "How can I find and join programmes?",
    answer:
      "Browse the available programmes on the Youth Portal, view their details and check the eligibility requirements. If you are eligible, you can register or apply directly through the platform.",
  },

  {
    question: "How do I find my nearest Youth Centre?",
    answer:
      "Use the Youth Centres section to search by Dzongkhag. You can view available centres, contact information, opening hours and other useful details.",
  },

  {
    question: "How can I become a volunteer?",
    answer:
      "You can register as a volunteer through the Youth Portal and explore available volunteer activities. Your participation and achievements can also be recorded through your Youth profile.",
  },

  {
    question: "How can I earn certificates and badges?",
    answer:
      "Participating in eligible programmes and volunteer activities can help you earn digital certificates, badges and milestone achievements that are recorded as part of your youth journey.",
  },

  {
    question: "What should I do if I need technical support?",
    answer:
      "If you experience problems with registration, login or other portal features, visit the Contact section or Help Centre to get assistance from the YPS support team.",
  },
];


/* =========================================================
   FAQ COMPONENT
========================================================= */

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-white
        py-14
        md:py-20
      "
    >

      {/* ===================================================
          BACKGROUND DECORATION
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-blue-100/40
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-10
          h-72
          w-72
          rounded-full
          bg-indigo-100/40
          blur-3xl
        "
      />


      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
          px-5
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          className="mx-auto mb-10 max-w-3xl text-center"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          {/* Badge */}

          <div
            className="
              mb-3
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-3.5
              py-1.5
              text-xs
              font-semibold
              text-blue-700
            "
          >
            <HelpCircle size={14} />

            <span>
              Help & Support
            </span>
          </div>


          {/* Heading */}

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-blue-900
              md:text-5xl
            "
          >
            Frequently Asked Questions
          </h2>


          {/* Description */}

          <p
            className="
              mx-auto
              mt-3
              max-w-2xl
              text-sm
              leading-relaxed
              text-gray-500
              md:text-base
            "
          >
            Find quick answers to common questions
            about the Youth Portal, programmes and services.
          </p>

        </motion.div>


        {/* =================================================
            FAQ LIST
        ================================================= */}

        <motion.div
          className="mx-auto max-w-3xl space-y-3"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >

          {FAQS.map((faq, index) => {

            const isOpen =
              openIndex === index;

            return (
              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  bg-white
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-blue-200 shadow-md"
                      : "border-gray-200 shadow-sm hover:border-blue-100 hover:shadow-md"
                  }
                `}
              >

                {/* =================================================
                    QUESTION BUTTON
                ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-4
                    text-left
                    transition-colors
                    hover:bg-blue-50/40
                    md:px-6
                    md:py-5
                  "
                >

                  <div className="flex items-center gap-3">

                    {/* Number */}

                    <span
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        text-[10px]
                        font-bold
                        transition-colors
                        ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                        }
                      `}
                    >
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>


                    {/* Question */}

                    <span
                      className={`
                        text-sm
                        font-semibold
                        leading-relaxed
                        md:text-base
                        ${
                          isOpen
                            ? "text-blue-700"
                            : "text-gray-800"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                  </div>


                  {/* Plus / Minus */}

                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      transition-colors
                      ${
                        isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }
                    `}
                  >

                    {isOpen ? (
                      <Minus size={15} />
                    ) : (
                      <Plus size={15} />
                    )}

                  </span>

                </button>


                {/* =================================================
                    ANSWER
                ================================================= */}

                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: "easeInOut",
                      }}
                    >

                      <div
                        className="
                          border-t
                          border-blue-100
                          px-5
                          pb-5
                          pt-3
                          md:px-6
                          md:pb-6
                        "
                      >

                        <p
                          className="
                            pl-10
                            text-sm
                            leading-relaxed
                            text-gray-500
                            md:text-[15px]
                          "
                        >
                          {faq.answer}
                        </p>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            );
          })}

        </motion.div>


        {/* =================================================
            CONTACT CTA
        ================================================= */}

        <motion.div
          className="
            mx-auto
            mt-10
            max-w-3xl
            rounded-2xl
            border
            border-blue-100
            bg-gradient-to-r
            from-blue-50
            via-white
            to-indigo-50
            p-5
            text-center
            md:p-6
          "
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          <h3
            className="
              text-sm
              font-bold
              text-gray-900
              md:text-base
            "
          >
            Still have questions?
          </h3>

          <p
            className="
              mx-auto
              mt-1
              max-w-md
              text-xs
              leading-relaxed
              text-gray-500
              md:text-sm
            "
          >
            Our support team is ready to help you
            with any questions about YPS.
          </p>


          <a
            href="#contact"
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-4
              py-2.5
              text-xs
              font-bold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-blue-700
              hover:shadow-md
              md:px-5
              md:py-3
              md:text-sm
            "
          >
            Contact Support

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default FAQ;
