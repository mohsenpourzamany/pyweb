import React from "react";
import "./Support.css";

const Support = () => {
  return (
    <div className="row support">
      <h2>ارتباط با پشتیبانی</h2>
      <form className="form-conect">
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">نام و نام خانوادگی</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">عنوان</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword" />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">موضوع</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label">ایمیل</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label"> ارسال فایل</label>
          <input className="form-control" type="file" id="formFile" />
        </div>
        <button type="button" className="btn btn-outline-primary btn-conect">
          {" "}
          ارسال تیکت
        </button>
      </form>
    </div>
  );
};

export default Support;
