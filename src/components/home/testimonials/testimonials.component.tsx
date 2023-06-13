import HarryPorter from '../../../assets/harry-potter.jpg';
import Weasly from '../../../assets/weasly.jpg';


export const Testimonials = () => {
    return (
        <section className='w-11/12 lg:w-10/12 m-auto py-24'>

            <div className="text-center w-4/5 md:w-2/3 m-auto">
                <p className='m-0 font-semibold'>
                    Reviewed by People
                </p>

                <h1 className='text-4xl my-4'>
                    Client's Testimonials
                </h1>

                <p className='text-gray-600 m-0'>
                    Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
                </p>

            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 mt-32">

                <div className='shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] p-8 sm:p-12'>
                    <p className="font-semibold text-xl">
                        "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "
                    </p>

                    <div className='flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-6'>

                            <div>
                                <img src={HarryPorter} alt="Harry Porter" className='rounded-full' width="80px" height="80px" />
                            </div>

                            <div>
                                <p className='m-0 font-bold text-lg'>
                                    Harry Potter
                                </p>
                                <p className='m-0'>
                                    Belgrade
                                </p>
                            </div>

                        </div>

                        <div className='txt-orange text-6xl hidden sm:block'>
                            <i className="fa-solid fa-quote-right"></i>
                        </div>
                    </div>

                </div>

                <div className='shadow-[0_20px_40px_0_rgba(0,0,0,0.08)] p-12'>
                    <p className="font-semibold text-xl">
                        "The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
                    </p>

                    <div className='flex items-center justify-between mt-10'>
                        <div className='flex items-center gap-6'>

                            <div>
                                <img src={Weasly} alt="Harry Porter" className='rounded-full' width="80px" height="80px" />
                            </div>

                            <div>
                                <p className='m-0 font-bold text-lg'>
                                    Ron Rizzly
                                </p>
                                <p className='m-0'>
                                    Novi Sad
                                </p>
                            </div>

                        </div>

                        <div className='txt-orange text-6xl'>
                            <i className="fa-solid fa-quote-right"></i>
                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}
