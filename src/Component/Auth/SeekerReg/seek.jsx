import { useState, useEffect } from "react";

import{StepperContext} from "./contexts/StepperContext";
import Stepper from "./components/Stepper";
import Steppercontrol from "./components/Steppercontrol";
import Account from "./components/steps/Account";
import Details from "./components/steps/Details";
import Final from "./components/steps/final";

function seek(){
  const [currentStep, setCurrentStep] = useState(1);
  const[userData , setUserData]=useState('');
  const[finalData,setFinalData]=useState([]);
  const steps=[
    "Personal Details",
    "Skills & Experience",
    "Supporting Documents "
  ];

  const displayStep =(step)=>{
    switch (step){
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return<Final />
      default :


    }
  }

  const handleClick =(direction)=>{
    let newStep = currentStep;
    direction=== "next" ? newStep++ : newStep--;

    newStep>0 && newStep <= steps.length && setCurrentStep(newStep)

}
  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        
        {/*Stepper*/}
        <div className="container horizontal mt-5">
        <Stepper
        steps={steps}
        currentStep={currentStep}
         />

    
        {/*Display Components*/}

        <div className="my-3 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>


        </div>


        {/*navigation controls*/}
        <Steppercontrol
        handleClick ={handleClick}
        currentStep={currentStep}
        steps={steps}
        
        />


    </div>
  )
}


export default seek;