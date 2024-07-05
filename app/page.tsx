export default function Home() {
  return (
    <>
      <main className="sm:max-w-xs w-full shadow-2xl mx-auto text-blue-100">
        <div className='bg-noise px-5'>
          <div className="flex flex-col relative justify-between h-screen py-5">
            <span className="initials absolute -top-20 -left-6">E</span>
            <span className="initials absolute -bottom-20 -right-6">S</span>
            <p className="text-normal text-right ml-auto max-w-32">We invite you to our special day</p>
            <h1 className="text-center">ERICK<br />•<br />SUGAR</h1>
            <p className="text-normal max-w-40">“Two are better<br /> than one” —Eccl. 4:9</p>
          </div>
          {/* Event Details */}
          <div className="flex flex-col justify-between py-20 text-center h-screen">
            {/* Date */}
            <div>
              <div className="grid grid-rows-3 grid-cols-5 gap-y-2 px-5 place-items-center">
                <h2 className="col-start-1 col-end-6 row-span-1">S E P T E M B E R</h2>
                <span className="day opacity-30">Thu</span>
                <span className="day opacity-30">Fri</span>
                <span className="day">Sat</span>
                <span className="day opacity-30">Sun</span>
                <span className="day opacity-30">Mon</span>
                <span className="date opacity-30">5</span>
                <span className="date opacity-30">6</span>
                <span className="date border rounded-full px-4 py-2">7</span>
                <span className="date opacity-30">8</span>
                <span className="date opacity-30">9</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 w-full">
              <hr className="w-1/4 opacity-50" />
              <h2>Save the Date</h2>
              <hr className="w-1/4 opacity-50" />
            </div>
            {/* Location */}
            <div className="flex flex-col items-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>

              <p className="text-normal">Saturday, September 7, 2024</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <p className="text-normal">Four o’clock in the afternoon</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

              <p className="text-normal">CVJ Food Catering<br />50 Eagle St., Santa Elena Marikina</p>
            </div>
          </div>
          {/* Parking Notice */}
          <div className='flex flex-col items-center text-center pb-14'>
            <h2 className='text-xl pb-6'>Traveling by Car?</h2>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>

            <p className='py-6'>There is designated parking available at 46 Eagle Street and in front of Marikina City Jail. Just follow the map for more details.</p>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241.2765718928334!2d121.100345928358!3d14.63179135124939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b83509dc915f%3A0xf0ff028e7d1b6007!2s46%20Eagle%2C%20Marikina%2C%201800%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1719933930555!5m2!1sen!2sph" width="100%" height="250" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/* Program Details */}
          <div className='py-10'>
            <h2 className='text-2xl pb-4 tracking-widest'>PROGRAM</h2>
            <ol className="relative border-s border-gray-200/80">
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">3:30 PM</time>
                <p className="pb-10 pt-2 opacity-80">Guests are about to enter</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">03:55 PM</time>
                <p className="pb-10 pt-2 opacity-80">Take a seat</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">04:00 PM</time>
                <p className="pb-10 pt-2 opacity-80">Ceremony</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">05:25 PM</time>
                <p className="pb-10 pt-2 opacity-80">Pictorial</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">06:15 PM</time>
                <p className="pb-10 pt-2 opacity-80">Dinner with music</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">07:00 PM</time>
                <p className="pb-10 pt-2 opacity-80">Performances</p>
              </li>
              <li className="ms-4">
                <div className="absolute w-2.5 h-2.5 bg-blue-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                <time className="text-sm font-bold leading-none">07:45 PM</time>
                <p className="pb-2 pt-2 opacity-80">Messages from the newlyweds</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="text-center sm:max-w-xs w-full mx-auto text-blue-100">
        <div className='bg-noise flex flex-col items-center p-4'>
          <hr className="opacity-50 w-full" />
          <img className="w-40" src="/logo.png" alt='Erick and Sugar' />
          <span className="text-small opacity-70">2024</span>
        </div>
      </footer>
    </>
  );
}
