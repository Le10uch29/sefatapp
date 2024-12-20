import React from "react";
import "./SendComponent.css";
import Image from "next/image";
import uil_import from "../../../public/uil_import.png";

const SendComponent: React.FC = () => {
  return (
    <div className="form-container">
      <div className="form-control">
        <form>
          <div className="pdf-uploader">
            <p className="input-descr">Nəticə</p>
            <label className="uploader-label" htmlFor="file-upload">
              <div className="uploader-content">
                <span>Neticənin pdfni yükləyin</span>
                <Image
                  alt="upload-file-icon"
                  src={uil_import}
                  width={43}
                  height={43}
                />
              </div>
              <input
                type="file"
                id="file-upload"
                accept="application/pdf"
                className="file-input"
              />
            </label>
            <button type="submit" className="btn">
              Göndərin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendComponent;
