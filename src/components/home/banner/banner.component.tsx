
//css
import './banner.styles.scss';

//images
import BannerImg from '../../../assets/bg-1.png';
import CarImg from '../../../assets/main-car.png'

export const Banner = () => {
    return (
        <section className="banner-wrapper w-11/12 lg:w-10/12  m-auto">

            <img className='banner-bg' src={BannerImg} alt="BannerImg" />

            <div className='banner py-10'>

                <div className="banner-text">

                    <p className='font-extrabold text-xl m-0'>
                        Plan your trip now
                    </p>

                    <p className='text-5xl md:text-3xl lg:text-5xl  my-4 font-bold'>
                        Save <span>big</span> with our car  rental
                    </p>

                    <p className='text-base lg:text-xl text-slate-600'>
                        Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                    </p>

                    <div className='flex flex-wrap md:justify-start  justify-center items-center gap-8 mt-10'>

                        <button className='common-btn bg-orange-btn font-bold'>
                            <span className='me-2'>Book Ride</span>
                            <i className="fa-solid fa-circle-check"></i>
                        </button>

                        <button className='common-btn bg-black-btn font-bold'>
                            <span className='me-2'>Learn More</span>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>

                </div>

                <div className="banner-img">
                    <img src={CarImg} alt="Car" className='w-full' />
                </div>
            </div>

        </section>
    )
}
