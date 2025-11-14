import { ArrowRight } from "lucide-react";
import BookingForm from "./BookingForm";


const BookYourStay = () => {
    
    return (
    <section className="w-full py-4 px-3 bg-gradient-to-r from-blue-100 via-blue-50 to-white pt-20">
        <div className="xl:px-10 xl:max-w-[1400px] xl:mx-auto flex flex-col gap-5">

        <article className="flex flex-col gap-5">
                <h3 className="text-blue-500 font-bold uppercase">Book Your Stay</h3>
                <h2 className="text-3xl md:text-4xl font-dm lg:text-5xl">Reserve Your Perfect Getaway</h2>
                <p className="text-gray-600 md:text-lg lg:text-xl">
                    Take the first step towards your dream vacation by checking availability and securing your preferred dates. Our simple booking process ensures a seamless experience from reservation to arrival.
                </p>
                <ul className="*:flex *:items-center *:gap-3 flex flex-col gap-3">
                    <li><ArrowRight className="bg-blue-200 text-blue-500 rounded-3xl h-6 w-6 p-1"/>Instant confirmation</li>
                    <li><ArrowRight className="bg-blue-200 text-blue-500 rounded-3xl h-6 w-6 p-1"/>Best rate guarantee</li>
                    <li><ArrowRight className="bg-blue-200 text-blue-500 rounded-3xl h-6 w-6 p-1"/>Flexible cancellation options</li>
                    <li><ArrowRight className="bg-blue-200 text-blue-500 rounded-3xl h-6 w-6 p-1"/>Secure payment</li>
                </ul>
        </article>
        <aside>
<BookingForm/>
        </aside>
        </div>
    </section>)
}

export default BookYourStay;