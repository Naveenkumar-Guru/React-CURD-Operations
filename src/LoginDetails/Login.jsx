import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

let Login = () => {
  let btnRef = useRef();
  let [showPassword, setShowPassword] = useState(false); //state to toggle

  let tcHandler = (event) => {
    console.log(event.target.checked);
    btnRef.current.disabled = !event.target.checked;
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <form>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label>Password:</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                />
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"}`}
                  ></i>
                </span>
              </div>
            </div>

            <div className="form-input">
              <input
                onInput={tcHandler}
                type="checkbox"
                className="form-input-checkbox"
              />
              Please Accept T&C
            </div>

            <input
              ref={btnRef}
              type="submit"
              value={"Login"}
              className="btn btn-warning"
              disabled
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
