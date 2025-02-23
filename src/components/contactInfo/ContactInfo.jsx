
import { FaCalendarDays } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="container mx-auto h-[200px] bg-gray-900 text-white p-12 border rounded-lg flex justify-between items-center"> 
      <div className="flex items-center space-x-2">
      <FaCalendarDays className="w-12 h-12" />
        <div>
        <p className="text-gray-400">We are open Monday-Friday</p>
        <p className="text-2xl font-bold">7:00 am - 9:00 pm</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 00-5.516 5.517l-1.13-2.257a1 1 0 01-1.21-.502l-4.493 1.498a1 1 0 01-.684.948V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3.28a1 1 0 00-.948-.684l-1.498-4.493a1 1 0 00-.502-1.21l2.257-1.13a11.042 11.042 0 015.516-5.517l1.13 2.257a1 1 0 001.21.502l4.493-1.498a1 1 0 00.684-.948V3a2 2 0 012-2h1a2 2 0 012 2v3.28a1 1 0 00.948.684l1.498 4.493a1 1 0 00.502 1.21l-2.257 1.13a11.042 11.042 0 01-5.516 5.517l-1.13-2.257a1 1 0 00-1.21-.502l-4.493-1.498a1 1 0 00-.684-.948H3z" />
        </svg>
        <div>
        <p className="text-gray-400">Have a question?</p>
        <p className="text-2xl font-bold">+2546 251 2658</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0" />
        </svg>
       <div>
       <p className="text-gray-400">Need a repair? Our address</p>
       <p className="text-2xl font-bold">Liza Street, New York</p>
       </div>
      </div>
    </div>
  );
};

export default ContactInfo;