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

  useEffect(() => {
    return () => {
      if (photo && photo.preview) {
        URL.revokeObjectURL(photo.preview);
      }
    };
  }, [photo]);

  useEffect(() => {
    if (!photo && initialPhotoUrl) {
      setPhoto({ preview: initialPhotoUrl });
    }
  }, [initialPhotoUrl, photo, setPhoto]);

  return (
    <div
      {...getRootProps()}
      className="px-3 py-2 border rounded-lg w-full flex flex-col  items-center gap-2 cursor-pointer hover:bg-gray-100"
    >
      <input {...getInputProps()} />
      <p className="text-start">
        {isDragActive
          ? "Drop the files here..."
          : "Drag & drop an image or click to select one"}
      </p>
      {photo && photo.preview && (
        <img
          src={photo.preview}
          alt="Preview"
          className="w-32 h-32 object-cover rounded-full"
        />
      )}
    </div>
  );
};

export default InputPhotoIdentity;
