// components/Certificate.js
export default function Certificate({ name, competitionName }) {
  return (
    <div className="relative" style={{
      width: "1117px", // ukuran A4
      height: "790px",
      backgroundImage: "url('/images/sertifikat-cover.png')",
      backgroundSize: "cover",
      // padding: "100px",
      textAlign: "center",
      fontFamily: "serif",
      color: "#000"
    }}>
      <h2 className="absolute top-[134px] left-[490px] font-montserrat text-[19px] -ms-4 pt-[40px] text-[#073b56]">001/F/SRT-IITC/INTERMEDIA/IX/2025</h2>
      <h2 className="font-montserrat text-5xl pt-[270px] text-[#073b56]">{name}</h2>
      <h2 className="absolute top-[317px] left-[455px] font-montserrat text-[23px] -ms-4 pt-[40px] text-[#073b56]">Peserta {competitionName}</h2>
      {/* <h2 className="font-montserrat text-[23px] pt-[39px] -ms-2 text-[#073b56]">Peserta {competitionName}</h2> */}
      {/* <p>Atas partisipasi dalam {event}</p>
      <p><i>{new Date().toLocaleDateString()}</i></p> */}
    </div>
  );
}
