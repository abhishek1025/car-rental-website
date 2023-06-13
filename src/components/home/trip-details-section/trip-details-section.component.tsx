import Car from '../../../assets/car-icon.png';
import Operator from '../../../assets/operator-icon.png';
import CarDriving from '../../../assets/driving-icon.png';
import { TripDetail, TripDetailsProp } from './trip-dettail.section.component';


const tripDetails: TripDetailsProp[] = [
    {
        image: Car,
        title: "Select Car",
        desc: "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
    },

    {
        image: Operator,
        title: "Contact Operator",
        desc: "Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
    },
    {
        image: CarDriving,
        title: "Let's Drive",
        desc: "Whether you're hitting the open road, we've got you covered with our wide range of cars"
    }
]

export const TripDetails = () => {

    return (
        <section className='w-11/12 lg:w-10/12 mx-auto mt-32 mb-28'>

            {/* title */}
            <div className='text-center'>
                <p className='text-xl font-semibold'>Plan your tip now</p>
                <h1 className='text-4xl mt-3'>Quick & easy car rental</h1>
            </div>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>

                {tripDetails.map((trip, index): JSX.Element => {
                    return <TripDetail key={index} {...trip} />;
                })}

            </div>

        </section>
    )
}
