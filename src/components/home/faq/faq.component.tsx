
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import './faq.styles.scss';

interface IFaq { ques: string; ans: string; isOpen: boolean; }

export const FAQs = () => {

    const faqData: IFaq[] = [
        {
            ques: "What is special about comparing rental car deals?",
            ans: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
            isOpen: true
        },
        {
            ques: "How do I find the car rental deals?",
            ans: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
            isOpen: false
        },
        {
            ques: "How do I find such low rental car prices?",
            ans: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
            isOpen: false
        }
    ]

    const [faqs, setFaqs] = useState(faqData);

    const toggleFAQ = (index: number): void => {

        const updatedFaq = faqs.map((faq, faqIndex) => {
            if (faqIndex === index) return { ...faq, "isOpen": !faq.isOpen }

            return { ...faq, "isOpen": false }
        })

        setFaqs(updatedFaq)
    }


    return (
        <section className="faq-sec py-10 md:px-0">

            <div className="w-11/12 lg:w-10/12 m-auto">
                <div className="mx-auto w-full text-center mb-10">
                    <h2 className="text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className=" text-base leading-relaxed text-gray-600 lg:mx-auto">
                        Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-3xl md:mt-16 bg-white">
                    {
                        faqs.map(({ ques, ans, isOpen }, index) => {
                            return (
                                <div key={index} className="cursor-pointer rounded-d">
                                    <button
                                        type="button"
                                        className={`
                                    flex w-full items-center justify-between px-4 py-3 sm:p-6 border-none 
                                    ${isOpen ? 'bg-orange-btn text-white' : 'bg-white'}
                                    transition-all duration-200
                                    `}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <span className="flex text-lg font-semibold">
                                            {index + 1}. {ques}
                                        </span>

                                        {
                                            isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />

                                        }
                                    </button>
                                    <div className={`px-4 sm:px-6 ${isOpen ? 'open-faq' : 'close-faq'} transition-all duration-200`}>
                                        <p className="text-gray-500">
                                            {ans}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>



        </section>
    )
}
