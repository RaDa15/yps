import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
  Clock,
} from "lucide-react";

/* =========================================================
   CONTACT CHANNELS
========================================================= */

const CHANNELS = [
  {
    label: "Email us",
    value: "support@yps.gov.bt",
    description: "We reply within two working days.",
    icon: Mail,
    textColor: "text-blue-600",
    bg: "bg-blue-50",
    href: "mailto:support@yps.gov.bt",
  },
  {
    label: "Call us",
    value: "+975 2 334455",
    description: "Mon–Fri, 9AM–5PM.",
    icon: Phone,
    textColor: "text-emerald-600",
    bg: "bg-emerald-50",
    href: "tel:+9752334455",
  },
  {
    label: "Visit us",
    value: "Ministry of Education & Skills Development",
    description: "Thimphu, Bhutan.",
    icon: MapPin,
    textColor: "text-amber-600",
    bg: "bg-amber-50",
    href: null,
  },
];

/* =========================================================
   EMPTY FORM
========================================================= */

const EMPTY_FORM = {
  name: "",
  email: "",
  message: "",
};

/* =========================================================
   MAIN SECTION
========================================================= */

const ContactSection = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [sent, setSent] = useState(false);

  /* =======================================================
     HANDLE INPUT CHANGE
  ======================================================= */

  const handleChange = (field) => (event) => {
    setForm((previous) => ({
      ...previous,
      [field]: event.target.value,
    }));
  };

  /* =======================================================
     HANDLE SUBMIT
  ======================================================= */

  const handleSubmit = (event) => {
    /*
      Prevent the browser from performing
      a native form submission.
    */

    event.preventDefault();

    /*
      TODO:
      Replace this with the real YPS support
      API / backend endpoint later.
    */

    setSent(true);
    setForm(EMPTY_FORM);
  };

  /* =======================================================
     INPUT STYLES
  ======================================================= */

  const inputClass = `
    mt-1.5
    w-full
    rounded-xl
    border
    border-gray-200
    bg-white
    px-4
    py-2.5
    text-sm
    text-gray-800
    outline-none
    transition
    placeholder:text-gray-400
    focus:border-blue-300
    focus:ring-2
    focus:ring-blue-100
  `;

  const labelClass =
    "text-xs font-bold text-gray-800";

  /* =======================================================
     RETURN
  ======================================================= */

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        via-white
        to-slate-50
        pt-8
        pb-10
        md:pt-10
        md:pb-12
      "
    >

      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          top-0
          h-72
          w-72
          rounded-full
          bg-blue-400/10
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-indigo-400/10
          blur-3xl
        "
      />

      {/* =================================================
          MAIN CONTAINER
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="mx-auto mb-7 max-w-3xl text-center">

          {/* Badge */}

          <div
            className="
              mb-2
              inline-flex
              items-center
              gap-1.5
              rounded-full
              border
              border-blue-200
              bg-blue-50
              px-3
              py-1.5
              text-xs
              font-bold
              text-blue-700
            "
          >
            <MessageSquare className="h-3.5 w-3.5" />

            <span>
              Support & Enquiries
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              text-3xl
              font-extrabold
              tracking-tight
              text-blue-950
              md:text-4xl
            "
          >
            Get in Touch
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-2
              max-w-2xl
              text-sm
              leading-relaxed
              text-gray-500
              md:text-base
            "
          >
            Questions about programmes, opportunities or
            technical support? Our team is here to help you
            navigate your youth journey.
          </p>

        </div>


        {/* =================================================
            CHANNELS + FORM
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-3
            md:gap-4
            lg:grid-cols-2
          "
        >

          {/* =================================================
              CONTACT CHANNELS
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 md:gap-4">

            {CHANNELS.map((channel) => {

              const Icon = channel.icon;

              const CardTag = channel.href
                ? "a"
                : "div";

              return (
                <CardTag
                  key={channel.label}
                  {...(
                    channel.href
                      ? {
                          href: channel.href,
                        }
                      : {}
                  )}
                  className="
                    group
                    block
                    rounded-2xl
                    border
                    border-gray-200
                    bg-white
                    p-4
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-200
                    hover:shadow-md
                    md:p-5
                  "
                >

                  <div className="flex items-start gap-3">

                    {/* Icon */}

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${channel.bg}
                        transition-transform
                        duration-300
                        group-hover:scale-105
                      `}
                    >
                      <Icon
                        size={20}
                        className={channel.textColor}
                      />
                    </div>

                    {/* Content */}

                    <div className="min-w-0">

                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-wider
                          text-blue-600
                        "
                      >
                        {channel.label}
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-xs
                          font-bold
                          text-gray-800
                          md:text-sm
                        "
                      >
                        {channel.value}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-relaxed
                          text-gray-400
                          md:text-xs
                        "
                      >
                        {channel.description}
                      </p>

                    </div>

                  </div>

                </CardTag>
              );
            })}


            {/* =================================================
                RESPONSE TIMES
            ================================================= */}

            <div
              className="
                rounded-2xl
                border
                border-blue-100
                bg-gradient-to-r
                from-blue-50
                via-white
                to-indigo-50
                p-4
                md:p-5
              "
            >

              <div className="flex items-start gap-3">

                {/* Icon */}

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-white
                    shadow-sm
                  "
                >
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>

                {/* Content */}

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-blue-600
                    "
                  >
                    Response Times
                  </p>

                  <h3
                    className="
                      mt-0.5
                      text-sm
                      font-bold
                      text-gray-900
                      md:text-base
                    "
                  >
                    Every message reaches a real person
                  </h3>

                  <p
                    className="
                      mt-1
                      text-xs
                      leading-relaxed
                      text-gray-500
                    "
                  >
                    Urgent centre or account issues are best
                    raised by phone during office hours.
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-sm
              md:p-5
            "
          >

            {sent ? (

              /* =================================================
                 SUCCESS STATE
              ================================================= */

              <div className="py-10 text-center">

                <div
                  className="
                    mx-auto
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-emerald-50
                  "
                >
                  <CheckCircle2
                    className="h-5 w-5 text-emerald-600"
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-sm
                    font-bold
                    text-gray-900
                    md:text-base
                  "
                >
                  Message sent
                </h3>

                <p
                  className="
                    mx-auto
                    mt-1
                    max-w-xs
                    text-xs
                    leading-relaxed
                    text-gray-500
                  "
                >
                  We'll reply to your email within two
                  working days.
                </p>

                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="
                    mt-4
                    text-xs
                    font-bold
                    text-blue-600
                    transition-colors
                    hover:text-blue-700
                  "
                >
                  Send another message
                </button>

              </div>

            ) : (

              /* =================================================
                 FORM
              ================================================= */

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                {/* Form Heading */}

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      text-blue-600
                    "
                  >
                    Send a Message
                  </p>

                  <h3
                    className="
                      mt-0.5
                      text-sm
                      font-bold
                      text-gray-900
                      md:text-base
                    "
                  >
                    Tell us what you need help with
                  </h3>

                </div>


                {/* =================================================
                    NAME
                ================================================= */}

                <div>

                  <label
                    htmlFor="contact-name"
                    className={labelClass}
                  >
                    Full name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Enter your name"
                    className={inputClass}
                  />

                </div>


                {/* =================================================
                    EMAIL
                ================================================= */}

                <div>

                  <label
                    htmlFor="contact-email"
                    className={labelClass}
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="email@example.bt"
                    className={inputClass}
                  />

                </div>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div>

                  <label
                    htmlFor="contact-message"
                    className={labelClass}
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange("message")}
                    placeholder="Write your message…"
                    className={`${inputClass} resize-none`}
                  />

                </div>


                {/* =================================================
                    SUBMIT BUTTON
                ================================================= */}

                <button
                  type="submit"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-600
                    px-5
                    py-3
                    text-xs
                    font-bold
                    text-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-700
                    hover:shadow-md
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-400
                    md:text-sm
                  "
                >
                  Send message

                  <Send
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                  />
                </button>


                {/* Privacy Note */}

                <p
                  className="
                    text-center
                    text-[10px]
                    leading-relaxed
                    text-gray-400
                  "
                >
                  Your details are used only to respond to
                  this enquiry.
                </p>

              </form>

            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;
