import React from "react";
import { Link } from "react-router-dom";
import tarh1 from "../../assets/images/tarh1.jpg";
import tarh2 from "../../assets/images/tarh2.jpg";
import tarh3 from "../../assets/images/tarh3.jpg";
import "./CardService.css";

const CardService = () => {
  return (
    <div className="row cardservice">
      <h3> سایت وردپرسی </h3>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={tarh1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">ساده </h4>
            <p className="card-text">طراحی سایت رسپانسیو</p>
            <p>گرافیک زیبا</p>
            <p>-</p>
            <p>-</p>
            <h5>150 $</h5>
            <Link to="/" className="btn btn-primary">
              ارسال درخواست
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={tarh2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">پیشرفته</h4>
            <p className="card-text">طراحی سایت رسپانسیو</p>
            <p>گرافیک زیبا</p>
            <p>ورود200محصول</p>
            <p>-</p>
            <h5>200 $</h5>
            <Link to="/" className="btn btn-primary">
              ارسال درخواست
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={tarh3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">حرفه ای</h4>
            <p className="card-text">طراحی سایت رسپانسیو</p>
            <p>گرافیک زیبا</p>
            <p>ورود400محصول</p>
            <p>طراحی اپلیکیشن</p>
            <h5>340 $</h5>
            <Link to="/" className="btn btn-primary">
              ارسال درخواست
            </Link>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <h3> سایت کدنویسی </h3>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={tarh1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">ساده </h4>
            <p className="card-text">طراحی سایت رسپانسیو</p>
            <p>گرافیک زیبا</p>
            <p>-</p>
            <p>-</p>
            <h5>150 $</h5>
            <Link to="/" className="btn btn-primary">
              ارسال درخواست
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={tarh2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">پیشرفته</h4>
            <p className="card-text">طراحی سایت رسپانسیو</p>
            <p>گرافیک زیبا</p>
            <p>ورود200محصول</p>
            <p>-</p>
            <h5>200 $</h5>
            <Link to="/" className="btn btn-primary">
              ارسال درخواست
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={tarh3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">حرفه ای</h4>
            <p className="card-text">طراحی سایت رسپانسیو</p>
            <p>گرافیک زیبا</p>
            <p>ورود400محصول</p>
            <p>طراحی اپلیکیشن</p>
            <h5>340 $</h5>
            <Link to="/" className="btn btn-primary">
              ارسال درخواست
            </Link>
          </div>
        </div>
      </div>
      <div className="hr"></div>
    </div>
  );
};
export default CardService;
