import QrCode from "./components/QrCode";

const qrCode = {
  id: 1,
  img: "/image-qr-code.png",
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
};

function App() {
  return (
    <>
      <QrCode
        title={qrCode.title}
        description={qrCode.description}
        img={qrCode.img}
      />
    </>
  );
}

export default App;
