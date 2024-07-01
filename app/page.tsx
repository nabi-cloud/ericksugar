export default function Home() {
  return (
    <>
      <main className="sm:max-w-xs w-full mx-auto px-5 bg-blue-900 text-blue-100">
        <div className="flex flex-col relative justify-between h-screen py-5">
          <span className="initials absolute -top-20 -left-6">E</span>
          <span className="initials absolute -bottom-20 -right-6">S</span>
          <p className="text-normal text-right ml-auto max-w-32">We invite you to our special day</p>
          <h1 className="text-center">ERICK<br />•<br />SUGAR</h1>
          <p className="text-normal max-w-40">“Two are better<br /> than one” —Eccl. 4:9</p>
        </div>
        {/* Event Details */}
        <div className="flex flex-col justify-between py-16 text-center h-screen">
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
          <h2>Save the Date</h2>
          {/* Location */}
          <div className="flex flex-col gap-4">
            <p className="text-normal">Saturday, September 7, 2024</p>
            <p className="text-normal">Four o’clock in the afternoon</p>
            <p className="text-normal">CVJ Food Catering<br/>50 Eagle St., Santa Elena Marikina</p>
          </div>
        </div>
        {/* Program Details */}
        <div>
          
        </div>
      </main>
      {/* Footer */}
      <footer className="flex flex-col gap-4 text-center sm:max-w-xs w-full p-4 mx-auto bg-blue-900 text-blue-100">
        <hr className="opacity-50" />
        <p className="text-footer">ERICK<br/>•<br/>SUGAR</p>
        <span className="text-small opacity-70">2024</span>
      </footer>
    </>
  );
}
