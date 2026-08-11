function WelcomeCard() {
    return (
        <section className=" bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col 
        md:flex-row justify-between items-start md:items-center gap-6">
            <div>
                <h2 className=" text-3xl font-bold text-blue-700">
                    Kuzuzangpo, Sonam! 👋
                </h2>
                <p className=" mt-3 text-gray-600">
                    Your journey to excellence continues today.
                    Let's make it count.
                </p>
            </div>
            <button className=" bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition">
                Quick Actions
            </button>
        </section>
    )
}

export default WelcomeCard;