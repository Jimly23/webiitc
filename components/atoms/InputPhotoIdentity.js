import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

const InputPhotoIdentity = ({ photo, setPhoto, initialPhotoUrl }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (
        acceptedFiles[0] instanceof File &&
        acceptedFiles[0].type.startsWith("image/")
      ) {
        const originalFileName = acceptedFiles[0].name;
        const renameFile = originalFileName.replace(/[ ()\[\]]/g, "");
        const newFile = new File([acceptedFiles[0]], renameFile, {
          type: acceptedFiles[0].type,
        });
        setPhoto(
          Object.assign(newFile, {
            preview: URL.createObjectURL(newFile),
          })
        );
      } else {
        console.warn("Invalid file type. Please upload an image file.");
      }
    },
  });

  // Clean up the URL.createObjectURL when the component unmounts
  useEffect(() => {
    return () => {
      if (photo && photo.preview) {
        URL.revokeObjectURL(photo.preview);
      }
    };
  }, [photo]);

  // Set the initial photo URL if available
  useEffect(() => {
    if (initialPhotoUrl && !photo) {
      setPhoto({ preview: initialPhotoUrl });
    }
  }, [initialPhotoUrl, photo, setPhoto]);

  return (
    <div
      {...getRootProps()}
      className=" p-2 border rounded-2xl md:w-52 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100"
    >
      <input {...getInputProps()} />
      {/* hide when no photo */}
      {!photo && (
        <p className="text-start">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop an image or click to select one"}
        </p>
      )}
      {photo && (
        <img
          src={photo.preview || photo} // Display preview or the direct URL
          alt="Preview"
          className="md:h-52 h-full md:w-52 w-full object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default InputPhotoIdentity;
