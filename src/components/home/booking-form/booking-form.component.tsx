import './booking-form.styles.scss';

export const BookingForm = () => {
    return (
        <section className='booking-form w-11/12 lg:w-10/12  box-border m-auto p-8 bg-white rounded-lg'>

            <h1 className='m-0'>Book a car</h1>


            <form>

                <div className='my-6 flex flex-wrap justify-between items-center  gap-y-8'>

                    <div className='flex flex-col input-fields'>
                        <label className='font-semibold'>
                            <i className="fa-solid fa-car txt-orange me-3"></i>
                            Select Your Car Type
                            <span className='txt-orange'> *</span>
                        </label>

                        <select name="" id="" required>

                            <option value="">
                                Select your car type
                            </option>

                            <option value="">Car 1</option>
                            <option value="">Car 2</option>
                            <option value="">Car 3</option>
                        </select>
                    </div>


                    <div className='flex flex-col input-fields'>
                        <label className='font-semibold'>
                            <i className="fa-solid fa-location-dot txt-orange me-3"></i>

                            Pick-up
                            <span className='txt-orange'> *</span>
                        </label>

                        <select name="" id="" required>

                            <option value="">
                                Select pick up location
                            </option>

                            <option value="">Car 1</option>
                            <option value="">Car 2</option>
                            <option value="">Car 3</option>
                        </select>
                    </div>

                    <div className='flex flex-col input-fields'>
                        <label className='font-semibold'>
                            <i className="fa-solid fa-location-dot txt-orange me-3"></i>
                            Drop-of
                            <span className='txt-orange'> *</span>
                        </label>

                        <select name="" id="" required>

                            <option value="">
                                Select drop off location
                            </option>

                            <option value="">Car 1</option>
                            <option value="">Car 2</option>
                            <option value="">Car 3</option>
                        </select>
                    </div>


                    <div className='flex flex-col input-fields w-full'>
                        <label className='font-semibold'>
                            <i className="fa-solid fa-car txt-orange me-3"></i>
                            Pick-up Date
                            <span className='txt-orange'> *</span>
                        </label>

                        <input type="date" />
                    </div>


                    <div className='flex flex-col input-fields'>
                        <label className='font-semibold'>
                            <i className="fa-solid fa-location-dot txt-orange me-3"></i>
                            Drop-of Date
                            <span className='txt-orange'> *</span>
                        </label>

                        <input type="date" />

                    </div>

                    <div className='md:pt-8 input-fields'>
                        <button className='common-btn bg-orange-btn' style={{ width: "100%" }}>
                            Search
                        </button>
                    </div>

                </div>



            </form>

        </section>
    )
}
