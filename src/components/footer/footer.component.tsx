import { ChevronRight } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="w-full bg-gray-100 py-4">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-center gap-16 md:flex-row">

                <div className="w-full px-4 lg:px-0">
                    <h1 className="max-w-sm text-3xl font-bold">CAR <span className='font-extralight'>Rental</span></h1>
                    <p>
                        We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
                    </p>
                </div>



                <div className="mb-8 lg:mb-0">
                    <h1 className="mb-6 text-3xl font-semibold ">COMPANY</h1>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium footer-list-style">
                        <li>New York  </li>
                        <li>  Careers</li>
                        <li> Mobile</li>
                        <li> Blog</li>
                        <li>  How we work</li>
                    </ul>
                </div>

                <div className="mb-8 lg:mb-0">
                    <h1 className="mb-6 text-3xl font-semibold ">WORKING HOURS</h1>
                    <ul className="flex flex-col space-y-4 text-[14px] font-medium footer-list-style">
                        <li>
                            Mon - Fri: 9:00AM - 9:00PM
                        </li>

                        <li>
                            Sat: 9:00AM - 19:00PM
                        </li>

                        <li>
                            Sun: Closed
                        </li>

                    </ul>
                </div>

                <div className="w-full px-4 md:w-full lg:px-0">
                    <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
                    <form action="" className="mt-4  w-full">
                        <input
                            className="flex h-14 w-full rounded-md border border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 box-border"
                            type="email"
                            placeholder="Email"
                        ></input>
                        <br />
                        <button type='button' className='w-full bg-orange-btn common-btn' >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
            <hr className="mt-10" />
            <div className="mx-auto max-w-6xl items-center justify-between px-4 md:flex lg:px-0">
                <div>
                    <span className="ml-4 text-lg font-bold">CAR </span> Rental
                </div>
                <div className="mt-4 md:mt-0">
                    <p className="text-sm font-medium text-gray-500">© 2023 CarRental. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
