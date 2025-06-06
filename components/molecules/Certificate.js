// components/Certificate.js
export default function Certificate({ name, event }) {
  return (
    <div style={{
      width: "1117px", // ukuran A4
      height: "790px",
      backgroundImage: "url('/images/template-sertifikat.png')",
      backgroundSize: "cover",
      // padding: "100px",
      textAlign: "center",
      fontFamily: "serif",
      color: "#000"
    }}>
      <h2 className="text-5xl pt-[300px]">{name}</h2>
      {/* <p>Atas partisipasi dalam {event}</p>
      <p><i>{new Date().toLocaleDateString()}</i></p> */}
    </div>
  );
}
