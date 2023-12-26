import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DialogModel from "../Shared/PopupModel/DialogModel";

function MediaForm() {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const containerStyle = {
    border: "1px solid transparent",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    margin: "30px",
    padding: "10px",
  };
  const buttonStyle = {
    textAlign: "right",
  };

  const dialogStyle = {
    borderRadius: "10px",
    maxWidth: "md",
  };

  return (
    <div>
      <div style={containerStyle}>
        <div
          style={{ fontSize: 20, fontWeight: "normal", marginBottom: "20px" }}
        >
          Create Text & Media
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-6">
              <div className="form-group mb-1">
                <label htmlFor="headingOne" className="mb-2">
                  Heading 01
                </label>
                <input
                  type="text"
                  className="form-control p-2"
                  id="headingOne"
                  placeholder="Add a heading that would make users interested"
                  {...register("headingOne")}
                />
              </div>
              <div className="form-group mb-1">
                <label htmlFor="HeadingTwo" className="mb-2">
                  Heading 02
                </label>
                <input
                  type="text"
                  className="form-control p-2"
                  id="HeadingTwo"
                  placeholder="Add heading that would make users interested"
                  {...register("headingTwo")}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mb-2">
                <label htmlFor="decriptionOne" className="mb-2">
                  Description 01
                </label>
                <textarea
                  className="form-control p-2"
                  id="decriptionOne"
                  rows="4"
                  placeholder="Add primary text to help users know more about your products, services, or offers"
                  {...register("descriptionOne")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="form-group mb-2">
                <label htmlFor="landscape" className="mb-2">
                  Landscape Marketing Image (1:9:1)
                </label>
                <input
                  type="url"
                  className="form-control p-2"
                  id="landscape"
                  placeholder="Add the URL of the image you want to use for the ad"
                  {...register("landscape")}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group mb-2">
                <label htmlFor="portrait" className="mb-2">
                  Portrait Marketing Image (4:5)
                </label>
                <input
                  type="url"
                  className="form-control p-2"
                  id="portrait"
                  placeholder="Add the URL of the image you want to use for the ad"
                  {...register("portrait")}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group mb-2">
                <label htmlFor="square" className="mb-2">
                  Square Marketing Image (1:1)
                </label>
                <input
                  type="url"
                  className="form-control p-2"
                  id="square"
                  placeholder="Add the URL of the image you want to use for the ad"
                  {...register("square")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-2">
                <label htmlFor="videoUrl" className="mb-2">
                  Video URL
                </label>
                <input
                  type="url"
                  className="form-control p-2"
                  id="videoUrl"
                  placeholder="Add the URL of the video you want to use for the ad"
                  {...register("videoUrl")}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group mb-2">
                <label htmlFor="businessName" className="mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  className="form-control p-2"
                  id="businessName"
                  placeholder="Add your business name"
                  {...register("businessName")}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group mb-2">
                <label htmlFor="buttonLevel" className="mb-2">
                  Button Level
                </label>
                <select
                  className="form-control form-control-md"
                  {...register("buttonLevel")}
                >
                  <option>Select a label that best suits for ad</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                  <option>Option 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group mb-2">
                <label htmlFor="websiteUrl" className="mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  className="form-control p-2"
                  id="websiteUrl"
                  placeholder="Add the URL of the landing page you want to redirect users to"
                  {...register("websiteUrl")}
                />
              </div>
            </div>
          </div>

          <div style={buttonStyle}>
            <Link to="/createAds">
              <Button
                type="button"
                variant="contained"
                style={{ backgroundColor: "#d1cec7" }}
              >
                Back
              </Button>
            </Link>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px" }}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <DialogModel
        open={open}
        handleClose={handleClose}
        dialogStyle={dialogStyle}
      >
        <i
          className="fa-solid fa-circle-check"
          style={{ color: "#1361e7", fontSize: "2rem" }}
        ></i>
      </DialogModel>
    </div>
  );
}

export default MediaForm;
