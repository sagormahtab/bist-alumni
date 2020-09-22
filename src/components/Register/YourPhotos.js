import React from "react";

const YourPhotos = () => {
  return (
    <div>
      <div class="form-group">
        <label className="mr-3" for="upload-photo">
          Upload Picture(Max 500kb)
        </label>
        <input type="file" name="register_file" id="upload-photo" />
      </div>

      <p className="comp-text">
        Please compress your image from here.{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://compressjpeg.com/"
        >
          Click Here
        </a>
      </p>
    </div>
  );
};

export default YourPhotos;
