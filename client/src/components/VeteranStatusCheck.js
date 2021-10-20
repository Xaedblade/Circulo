import React, { useContext, useEffect, useState } from "react";
import VeteransContext from "../context/veterans.context";

const VeteranStatusCheck = (props) => {
  const context = useContext(VeteransContext);
  const { getVeteranStatus, loading, error, veteran_status } = context;

  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    ssn: "",
    birth_date: "",
    middle_name: undefined,
    gender: undefined,
  });

  const [showStatus, setShowStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowStatus(false);
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, [loading, veteran_status, error, showStatus]);

  const onChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    getVeteranStatus(inputs);
    setShowStatus(true);
    setInputs({
      first_name: "",
      last_name: "",
      ssn: "",
      birth_date: "",
      middle_name: undefined,
      gender: undefined,
    });
  };

  return (
    <>
      <div className="container">
        <h1>Check Veteran Status</h1>
        {veteran_status && showStatus && (
          <div className="card">
            <div className="card header">
              <h2
                style={{
                  color: veteran_status === "confirmed" ? "green" : "red",
                }}
              >
                Status: {veteran_status}
              </h2>
            </div>
          </div>
        )}
        <form onSubmit={onSubmit}>
          <label className="form-label" htmlFor="first_name">
            First Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="first_name"
            value={inputs.first_name}
            required
            onChange={onChange}
          />
          <br />
          <label className="form-label" htmlFor="last_name">
            Last Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="last_name"
            value={inputs.last_name}
            required
            onChange={onChange}
          />
          <br />
          <label className="form-label" htmlFor="middle_name">
            Middle Name:
          </label>
          <input
            className="form-control"
            type="text"
            name="middle_name"
            value={inputs.middle_name}
            onChange={onChange}
          />
          <br />
          <label className="form-label" htmlFor="ssn">
            SSN:
          </label>
          <input
            className="form-control"
            type="password"
            name="ssn"
            value={inputs.ssn}
            required
            onChange={onChange}
          />
          <br />
          <label className="form-label" htmlFor="birth_date">
            Birth Date:
          </label>
          <input
            className="form-control"
            type="date"
            name="birth_date"
            value={inputs.birth_date}
            required
            onChange={onChange}
          />
          <br />
          <label className="form-label" htmlFor="gender">
            gender:
          </label>
          <input
            className="form-control"
            type="text"
            name="gender"
            value={inputs.gender}
            onChange={onChange}
          />
          <br />
          <input className="form-control" type="submit" value="Check Status" />
        </form>
      </div>
    </>
  );
};

export default VeteranStatusCheck;
