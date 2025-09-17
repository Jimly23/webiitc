// components/CertificateSeminar.js
export default function CertificateSeminar({ name, certificateNumber }) {
  const formattedNumber = String(certificateNumber).padStart(3, "0");
  return (
    <div className="relative" style={{
      width: "1117px", // ukuran A4
      height: "790px",
      backgroundImage: "url('/images/sertifikat-cover-webinar.png')",
      backgroundSize: "cover",
      // padding: "100px",
      // textAlign: "center",
      fontFamily: "serif",
      color: "#000"
    }}>
      <h2 className="absolute top-[135px] left-[480px] font-montserrat text-[19px] -ms-10 pt-[40px] text-[#073b56]">{formattedNumber}/F/SRT-IITC/INTERMEDIA/IX/2025</h2>
      {/* <h2 className="font-montserrat text-4xl pt-[260px] text-[#073b56] text-center -ms-10">{name}</h2> */}
      <h2 className="font-montserrat text-4xl pt-[260px] text-[#073b56] text-center transform -translate-x-10">{name}</h2>
    </div>
  );
}
