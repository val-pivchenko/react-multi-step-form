import { useState } from "react";
import Stepper from "./Stepper";
import Buttons from "./Buttons";
import Cards from "./Cards";

function App() {
  const [step, setStep] = useState(1);

  function setStepFromChild(data) {
    setStep(data);
  }

  return (
    <>
      <Stepper setStepToParent={setStepFromChild}></Stepper>
      <Cards />
      <Buttons firstPage={true} lastPage={false}></Buttons>
    </>
  );
}

export default App;
