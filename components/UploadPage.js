import React, { useState } from "react";
import "../styles/UploadPage.css"; 
import coralImage from "../assets/coral.jpg"; 

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle file upload (dummy function for now)
  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading:", selectedFile.name);
      // Add API call logic here to upload the file
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="upload-container">
      {/* Background Image Applied via Inline Style */}
      <div
        className="upload-background"
        style={{ backgroundImage: `url(${coralImage})` }}
      ></div>

      <div className="upload-content">
        <h1>Upload Coral Image</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button className="btn" onClick={handleUpload}>Upload</button>

        {/* Display Selected File Name */}
        {selectedFile && <p className="file-name">Selected File: {selectedFile.name}</p>}
      </div>
    </div>
  );
};

export default UploadPage;
