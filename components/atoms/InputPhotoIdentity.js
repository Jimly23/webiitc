import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";

const InputPhotoIdentity = ({ photo, setPhoto, initialPhotoUrl, onError }) => {
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
        // Call onError prop if file type is invalid
        if (onError) {
          onError("Invalid file type. Please upload an image file.");
        }
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
    if (initialPhotoUrl && !photo) {
      setPhoto({ preview: initialPhotoUrl });
    }
  }, [initialPhotoUrl, photo, setPhoto]);

  return (
    <div
      {...getRootProps()}
      className="p-2 border rounded-2xl w-full my-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-gray-100"
    >
      <input {...getInputProps()} />
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
          className="h-52 w-52 object-cover rounded-xl"
        />
      )}
    </div>
  );
};

export default InputPhotoIdentity;
