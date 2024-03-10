import { useEffect, useRef, useState } from "react"

const CheckoutStepper = ({checkoutStepperConfig=[]}) => {

    const [currentstep, setCurrentStep] = useState(1);
    const handleNext = ()=>{
        setCurrentStep((prev)=>prev+1);
    }
    const [margins, setMargins] = useState({
        marginLeft:0,
        marginRight:0,
    })
    const stepRef = useRef([]);

    const ActiveComponent = checkoutStepperConfig[currentstep-1]?.component;
    const calculateWidth = ()=>{
        return ((currentstep-1)/(checkoutStepperConfig.length-1))*100;
    }

    useEffect(()=>{
        setMargins({
            marginLeft: stepRef.current[0].offsetWidth/2,
            marginRight: stepRef.current[checkoutStepperConfig.length-1].offsetWidth/2,
        });
    },[stepRef,checkoutStepperConfig.length]);
  return (
    <div className="container">
        <div className="stepper">
        {checkoutStepperConfig.map((steps,index)=>{
            return (
                <div key={index} className={`step`} ref={(el)=>stepRef.current[index] = el}>
                        <div className={`step-no ${currentstep===index+1?"active":""} ${currentstep>index+1?"completed":""} `}>{currentstep<index+2?index+1:"✓"}</div>
                        <div className="step-name">{steps.name}</div>
                </div>
            )
        })}
        </div>
        <div className="progress-bar" style={{
            width:`calc(100%-${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight
        }}>
            <div className="progress" style={{width:`${calculateWidth()}%`}}>
            </div>
        </div>
        {ActiveComponent &&  <ActiveComponent/>}
        {currentstep<checkoutStepperConfig.length+1?<button onClick={handleNext}>{currentstep>checkoutStepperConfig.length-1?"Finish":"Next"}</button>:"Checkout Finished"}
    </div>
  )
}

export default CheckoutStepper
