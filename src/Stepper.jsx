/* eslint-disable react/prop-types */
const Stepper = ({ setStepToParent }) => {
  const handleChange = (e) => {
    setStepToParent(e.target.value);
  };
  return (
    <div>
      <ul className="stepper-container">
        <li className="step active" onClick={handleChange}>
          1
        </li>
        <li className="step" onClick={handleChange}>
          2
        </li>
        <li className="step" onClick={handleChange}>
          3
        </li>
        <li className="step" onClick={handleChange}>
          4
        </li>
      </ul>
    </div>
  );
};

export default Stepper;
