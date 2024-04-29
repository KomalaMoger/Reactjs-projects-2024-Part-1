import React, { useState } from "react";
import "./Qr-code-generator.css";
import QRCode from "react-qr-code";
export default function Qrcodegenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");
  const handleGeneratorQrCode = () => {
    setQrcode(input);
  };
  return (
    <div className="Qr-code-container">
      <h1>QR Code Generator</h1>
      <div>
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          name="qr-code"
          placeholder="Enter your value"
        />
        {/* when input is empty then we will disable the button */}
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGeneratorQrCode}
        >
          btn
        </button>
      </div>
      <div>
        {/* we will render our qr-code -we wil import from react-qr-code(it's a package)*/}
        <QRCode id="qr-code-value" value={qrcode} size={300} bgColor="#fff" />
      </div>
    </div>
  );
}
