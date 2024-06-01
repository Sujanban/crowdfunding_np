const qrcode = require("qrcode");

const generateQRCode =  (campaign) => {
  try {
    const qrData = JSON.stringify(campaign); 
    const options = {
      errorCorrectionLevel: "M",
      type: "image/png",
      quality: 0.92,
      margin: 1,
      width: 300,
    };

    const qrCodeData =  qrcode.toDataURL(qrData, options);
    return qrCodeData;
  } catch (err) {
    console.error("Error generating QR code:", err);
    throw new Error("Failed to generate QR code");
  }
};

module.exports = { generateQRCode };
