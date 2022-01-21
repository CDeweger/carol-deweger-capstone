import axios from "axios";
import React, { useState } from "react";

const UploadImage = () => {
  const [imageSelected, setImageSelected] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const uploadFile = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "wg0wjivl");

    axios
      .post("https://api.cloudinary.com/v1_1/dml1rigkl/image/upload", formData)
      .then((res) => {
        console.log(res);
        console.log(res.data.secure_url);
        setImagePreview(res.data.secure_url);

        // const data = response.data;
        // const fileURL = data.secure_url
      });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <img src={imagePreview} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default UploadImage;
