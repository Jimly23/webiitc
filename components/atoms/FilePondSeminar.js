import Image from "next/image";
import { useState } from "react";

const FileInputMultiple = ({
  images,
  setImages,
  className = "bg-white",
  placeholder = "Pilih file",
}) => {
  const handleFileChange = (event) => {
    setImages(Array.from(event.target.files));
    //console.log(event);
  };

  return (
    <div className={` mb-4 mt-2`}>
      <input
        type="file"
        className="hidden"
        multiple
        id="file-input"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-input"
        className={`block ${!(images && images.length != 0) && ""
          } ${className}  rounded-md cursor-pointer`}
      >
        {images && images.length != 0 ? images.map((image, index) => <img
          key={index}
          className="w-full mt-2 ring-1 rounded-xl ring-slate-300"
          width={1920}
          height={1080}
          src={typeof image == "string" ? image : URL.createObjectURL(image)}
          alt={`gambar -${image?.target?.value}`}
        />) : (
          <p className="p-4 border-brown border rounded-xl">{placeholder}</p>
        )}
      </label>
    </div>
  );
};

export default FileInputMultiple;
