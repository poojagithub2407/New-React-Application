import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const CreateAds = () => {
  const [mediaADChecked, setMediaADChecked] = useState(false);
  const [textAdsChecked, setTextAdsChecked] = useState(false);
  const navigate = useNavigate();

  const handleMediaADCheckboxChange = () => {
    setMediaADChecked(true);
    setTextAdsChecked(false);
  };

  const handleTextAdsCheckboxChange = () => {
    setMediaADChecked(false);
    setTextAdsChecked(true);
  };

  const handleNextButtonClick = () => {
    if (mediaADChecked) {
      navigate("/textAdsPage");
    } else if (textAdsChecked) {
      navigate("/mediaADPage");
    } else {
      alert("Please check at least one checkbox to proceed!");
    }
  };

  const container = {
    border: "1px solid transparent",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "50px",
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const textAd = {
    marginTop: "300px",
    backgroundColor: "#f5f4f2",
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.1)",
    width: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const checkboxContainerStyle = {
    flex: "1",
    border: "1px solid transparent",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "50px",
    marginLeft: "80px",
  };

  const checkboxStyle = {
    transform: "scale(1.5)",
    marginLeft: "20px",
    marginTop: "20px",
  };

  const buttonStyle = {
    textAlign: "right",
  };

  return (
    <div style={container}>
      <div style={containerStyle}>
        <div style={{ ...checkboxContainerStyle, marginLeft: "300px" }}>
          <input
            type="checkbox"
            checked={mediaADChecked}
            onChange={handleMediaADCheckboxChange}
            style={checkboxStyle}
          />
          <div style={textAd}>
            <span>Create</span>
            <div style={{ fontWeight: "bolder", fontSize: "20px" }}>
              Text Ad
            </div>
          </div>
        </div>

        <div style={{ ...checkboxContainerStyle, marginRight: "300px" }}>
          <input
            type="checkbox"
            checked={textAdsChecked}
            onChange={handleTextAdsCheckboxChange}
            style={checkboxStyle}
          />
          <div style={textAd}>
            <span style={{ color: "light" }}>Create</span>
            <div style={{ fontWeight: "bolder", fontSize: "20px" }}>
              Media Ad
            </div>
          </div>
        </div>
      </div>
      <div style={buttonStyle}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNextButtonClick}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default CreateAds;
