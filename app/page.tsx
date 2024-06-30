export default function Home() {
  return (
    <main>
      <div>
        <p className="text-normal">We invite you to our special day</p>
        <h1>ERICK • SUGAR</h1>
        <p className="text-normal">“Two are better than one” —Eccl. 4:9</p>
      </div>
      {/* Event Details */}
      <div>
        {/* Date */}
        <div>
          <h2>S E P T E M B E R</h2>
          <div>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
            <span>Mon</span>
          </div>
          <div>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
        </div>
        <h2>Save the Date</h2>
        {/* Location */}
        <div>
          <p className="text-normal">Saturday, September 7, 2024</p>
          <p className="text-normal">Four o’clock in the afternoon</p>
          <p className="text-normal">CVJ Food Catering 50 Eagle St., Santa Elena Marikina</p>
        </div>
      </div>
      {/* Footer */}
      <div>
        <hr/>
        <p className="text-footer">ERICK • SUGAR</p>
        <span className="text-small">@2024</span>
      </div>
    </main>
  );
}
