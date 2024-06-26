import { useState } from "react";
import { storage } from "../api/firebase";

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUploadClick = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File Uploaded Successful !!!");
      fileRef.getDownloadURL().then((url) => {
        console.log("저장 경로 확인 : " + url);
        setUrl(url);
      });
    });
  };
  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      <button onClick={handleUploadClick}>Upload</button>
      {url && <img src={url} alt="uploaded" />}
    </div>
  );
};
export default ImageUploader;
