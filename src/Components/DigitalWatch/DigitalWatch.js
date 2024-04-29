import React, { useState } from "react";
import "./DigitalWatch.css";
export default function DigitalWatch() {
  const [display, setDispalay] = useState("");
  setInterval(() => {
    const date = new Date();
    // The date.toLocaleTimeString() method is used to fetch the time from a given Date object.
    // Parameter: This method does not accept any parameter. It is just used along with a Date Object from which we want to fetch the time.
    const clock = date.toLocaleTimeString();
    setDispalay(clock);
    console.log(date, clock);
  }, 1000);
  return (
    <>
      <div class="Digital-Container">
        <div class="vertical-center">
          <p className="Digital-Title">Digital Watch</p>
          <p className="Digital-Watch">{display}</p>
        </div>
      </div>
    </>
  );
}
