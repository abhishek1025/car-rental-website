import Cars from '../../../assets/banner-img-cars.png';
import './why-choose-section.styles.scss';

import Drive from '../../../assets/choose-sec-car.png';
import Dollar from '../../../assets/choose-sec-dollar.png';
import Hand from '../../../assets/choose-sec-hands.png';

export const WhyChooseUsSection = () => {
    return (
        <section className='why-choose-us-sec'>

            <div className="w-[90%] lg:w-4/5 mx-auto mt-20">
                <div className="text-center">
                    <img src={Cars} alt="Cars" className='w-full' />
                </div>

                <div className='grid grid-cols-[85%] md:grid-cols-[70%] gap-y-32 lg:grid-cols-2 gap-x-7 xl:gap-x-32 justify-center mt-10'>

                    <div>

                        <p className='font-semibold text-lg mt-0'>
                            Why Choose Us
                        </p>

                        <h1 className='m-0 text-4xl'>
                            Best valued deals you will ever find
                        </h1>

                        <p className='text-gray-600'>
                            Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                        </p>

                        <button className='common-btn bg-orange-btn mt-5'>
                            Find Details <span className='ml-5'><i className="fa-solid fa-chevron-right"></i></span>
                        </button>

                    </div>

                    <div className='flex flex-col gap-y-9 m-auto text-center'>

                        <div className='flex flex-col md:flex-row items-center gap-9'>

                            <img src={Drive} alt="Drive" width="110px" height="110px" />

                            <div>
                                <h2 className='m-0'>
                                    Cross Country Drive
                                </h2>

                                <p className='mt-1 text-gray-600'>
                                    Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.
                                </p>
                            </div>
                        </div>


                        <div className='flex flex-col md:flex-row items-center gap-9'>
                            <img src={Dollar} alt="Drive" width="110px" height="110px" />

                            <div>
                                <h2 className='m-0'>
                                    All Inclusive Pricing
                                </h2>

                                <p className='mt-1 text-gray-600'>
                                    Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col md:flex-row  items-center gap-9'>
                            <img src={Hand} alt="Drive" width="110px" height="110px" />

                            <div>
                                <h2 className='m-0'>
                                    No Hidden Charges
                                </h2>

                                <p className='mt-1 text-gray-600'>
                                    Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.
                                </p>
                            </div>
                        </div>


                    </div>
                </div>


            </div>


        </section>
    )
}

