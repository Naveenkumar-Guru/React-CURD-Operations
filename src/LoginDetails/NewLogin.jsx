import React, { useState } from "react";

const NewLogin = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="form-check">
              <input
                id="tc"
                type="checkbox"
                onChange={(e) => setAccepted(e.target.checked)}
                className="form-check-input"
              />
              <label htmlFor="tc" className="form-check-label">
                Please Accept T&C
              </label>
            </div>

            <input
              type="button"
              value="Login"
              disabled={!accepted}
              className="btn btn-primary mt-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewLogin;
