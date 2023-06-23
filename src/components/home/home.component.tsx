import { BannerSection2 } from './banner/banner-section-2';
import { Banner } from './banner/banner.component';
import { BookingForm } from './booking-form/booking-form.component';
import { FAQs } from './faq/faq.component';
import { Testimonials } from './testimonials/testimonials.component';
import { TripDetails } from './trip-details-section/trip-details-section.component';
import { WhyChooseUsSection } from './why-choose-section/why-choose-section.component';

const Home = () => {
    return (
        <>
            <Banner />
            <BookingForm />
            <TripDetails />
            <BannerSection2 />
            <WhyChooseUsSection />
            <Testimonials />
            <FAQs />
        </>
    )
}

export default Home;