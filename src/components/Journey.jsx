import {
  UserPlus,
  Fingerprint,
  BadgeCheck,
  Users,
  HeartHandshake,
  Trophy,
  Award,
  Star
} from "lucide-react";


const journeySteps = [

  {
    number: "1",
    icon: UserPlus,
    title: "Register",
    description:
      "Create your youth profile and begin your digital journey."
  },

  {
    number: "2",
    icon: Fingerprint,
    title: "Verify Identity",
    description:
      "Secure verification using National Digital Identity (NDI)."
  },

  {
    number: "3",
    icon: BadgeCheck,
    title: "Receive Digital Youth ID",
    description:
      "Your gateway to youth programmes and services."
  },

  {
    number: "4",
    icon: Users,
    title: "Join Programmes",
    description:
      "Explore skills, sports, education and wellness programmes."
  },

  {
    number: "5",
    icon: HeartHandshake,
    title: "Volunteer",
    description:
      "Contribute and create positive impact in your community."
  },

  {
    number: "6",
    icon: Trophy,
    title: "Earn Achievements",
    description:
      "Collect badges and track your milestones."
  },

  {
    number: "7",
    icon: Award,
    title: "Digital Certificates",
    description:
      "Receive verified proof of your skills and activities."
  },

  {
    number: "8",
    icon: Star,
    title: "Become a Youth Leader",
    description:
      "Inspire and guide the next generation."
  }

];



const Journey = () => {

  return (

    <section className="
py-24
bg-gradient-to-b
from-white
via-blue-50/40
to-white
">

      <div className="max-w-7xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="
          text-4xl 
          md:text-5xl 
          font-bold 
          text-blue-700
          ">
            Your Journey Starts Here
          </h2>


          <p className="
          mt-5 
          text-gray-600 
          max-w-2xl 
          mx-auto
          ">
            From registration to leadership,
            follow your growth journey with Bhutan's
            digital youth ecosystem.
          </p>

        </div>



        {/* Timeline */}

        <div className="
        grid
        grid-cols-1
        md:grid-cols-4
        gap-10
        relative
        ">


          {/* Timeline Line */}

          {/* <div className="
          hidden
          md:block
          absolute
          top-8
          left-0
          right-0
          h-1
          bg-blue-100
          z-0
          ">
          </div> */}



          {
            journeySteps.map((step,index)=>{


              const Icon = step.icon;


              return (

                <div
                key={index}
                className="
                relative
                group
                z-10
                "
                >


                  {/* Number Circle */}

                  <div className="
                  absolute
                  -top-6
                  left-1/2
                  -translate-x-1/2
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  border-4
                  border-blue-600
                  flex
                  items-center
                  justify-center
                  text-blue-600
                  font-bold
                  shadow-md
                  ">

                    {step.number}

                  </div>




                  {/* Card */}

                  <div className="
    mt-10
    bg-white/80
    backdrop-blur-lg
    rounded-[24px]
    p-6
    shadow-lg
    border
    border-gray-200/50
    hover:-translate-y-3
    hover:shadow-2xl
    transition-all
    duration-500">



                    {/* Icon */}

                   <div className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-blue-100
to-blue-50
flex
items-center
justify-center
text-blue-700
mb-5
shadow-inner
group-hover:scale-110
transition-transform
duration-300
">

                      <Icon 
                      size={32}
                      strokeWidth={2}
                      />

                    </div>




                    <h3 className="
                    text-xl
                    font-bold
                    text-blue-700
                    ">
                      {step.title}
                    </h3>




                    <p className="
                    mt-3
                    text-gray-600
                    text-sm
                    leading-relaxed
                    ">
                      {step.description}
                    </p>




                    <button className="
                    mt-5
                    text-blue-600
                    text-sm
                    font-semibold
                    opacity-0
                    group-hover:opacity-100
                    transition
                    ">
                      Learn More →
                    </button>


                  </div>


                </div>

              )

            })
          }



        </div>


      </div>


    </section>

  );

};


export default Journey;