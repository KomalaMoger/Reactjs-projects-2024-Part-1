import React from "react";
import StarRating from "./Components/StarRating/StarRating";
import DigitalWatch from "./Components/DigitalWatch/DigitalWatch";
// import Weather from "./Components/Weather_App/Weather/Weather";
import Qrcodegenerator from "./Components/Qr-code-generator/Qr-code-generator";
function App() {
  return (
    <div>
      <StarRating noOfStars={10} />
      {/* <DigitalWatch /> */}
      {/* <Weather /> */}
      {/* <Qrcodegenerator /> */}
    </div>
  );
}

export default App;
