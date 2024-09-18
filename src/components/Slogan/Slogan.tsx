import Cards from '../../assets/desktop/isocard.svg';
const Slogan = () => {
    return (
        <section className="my-14 text-36 font-extrabold md:grid md:grid-cols-3 md:items-center">
            <div className="text-center md:col-start-2">
                <p>
                    Earn <span className="text-purple-300">More</span>
                </p>
                <p className="">Pay Less</p>
                <button className="mt-[27px] rounded-[14px] bg-purple-500 px-6 py-[6px] text-20 font-bold text-white transition-colors duration-150 ease-linear hover:bg-pink-500">
                    Start
                </button>
            </div>
            <div className="mt-4 flex justify-center">
                <img src={Cards} alt="credit card" className="md:size-96" />
            </div>
        </section>
    );
};

export default Slogan;
