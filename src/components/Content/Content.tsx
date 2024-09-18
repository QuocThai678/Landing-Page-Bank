import Check from '../../assets/desktop/check.svg';
import { useSpring, animated } from 'react-spring';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
const Content = () => {
    const customer = useSpring({ customers: 10245, from: { customers: 0 }, delay: 350 });
    const cardIssueds = useSpring({ from: { cardIssued: 0 }, cardIssued: 12045, delay: 350 });
    return (
        <section className="space-y-20 px-12 md:flex md:items-center md:justify-around md:space-x-16 md:space-y-0 md:px-24">
            <div className="from white flex min-h-[270px] flex-col justify-center space-y-8 rounded-[24px] bg-gradient-to-b from-white/40 to-transparent p-4 shadow-md md:min-w-72">
                <div className="flex items-center justify-center">
                    <FaUser size={'22px'} />
                    <div className="ml-8">
                        <animated.p className="text-26">{customer.customers.to((val) => Math.floor(val))}</animated.p>

                        <span className="text-13 font-semibold">Customers</span>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <BsFillCreditCardFill size={'22px'} />
                    <div className="ml-8">
                        <animated.p className="text-26">
                            {cardIssueds.cardIssued.to((val) => Math.floor(val))}
                        </animated.p>
                        <span className="text-13 font-semibold">Cards Issued</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-start space-y-12">
                <div className="check-content">
                    <img className="h-7 w-7" src={Check} alt="checked" />
                    <p className="text-13 font-semibold">Card reports sent to your phone every weeks</p>
                </div>

                <div className="check-content">
                    <img className="h-7 w-7" src={Check} alt="checked" />
                    <p className="text-13 font-semibold">No external fees</p>
                </div>

                <div className="check-content">
                    <img className="h-7 w-7" src={Check} alt="checked" />
                    <p className="text-13 font-semibold">Set spending limits and restricions</p>
                </div>
            </div>
        </section>
    );
};

export default Content;
