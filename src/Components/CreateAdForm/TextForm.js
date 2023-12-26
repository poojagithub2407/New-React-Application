import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { Link } from "react-router-dom";
import DialogModel from "../Shared/PopupModel/DialogModel";

function TextForm() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      navigate("/createAds");
    }, 3000);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const containerStyle = {
    border: "1px solid transparent",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    margin: "50px",
  };

  const buttonStyle = {
    textAlign: "right",
    marginTop: "80px",
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
              <div className="form-group mb-2">
                <label htmlFor="headingOne" className="mb-2">
                  Heading 01
                </label>
                <input
                  type="text"
                  className="form-control p-2"
                  id="headingOne"
                  placeholder="Add a heading that would make user interested"
                  {...register("headingOne")}
                />
              </div>
              <div className="form-group mb-2">
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
                  placeholder="Add primary text to help users more about your products, service, or offers"
                  {...register("descriptionOne")}
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

            <div className="col-12">
              <div className="form-group mb-2">
                <label htmlFor="websitUrl" className="mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  className="form-control p-2"
                  id="websitUrl"
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
              Button
            </Button>
          </div>
        </form>
      </div>

      <DialogModel open={open} handleClose={handleClose} dialogStyle={dialogStyle}>
        <i className="fa-solid fa-circle-check" style={{ color: "#1361e7", fontSize: "2rem" }}></i>
      </DialogModel>
    </div>
  );
}

export default TextForm;
