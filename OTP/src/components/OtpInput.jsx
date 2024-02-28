import { useEffect, useRef, useState } from "react"

const OtpInput = ({phone,length}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""))
    const InputRef = useRef([]);
    const handleChange = (index, e)=>{
        const value = e.target.value;
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp);



        // Move to next box
        if(index<length-1 && value && InputRef.current[index+1]){
          InputRef.current[index+1].focus();
        }
        const combinedOtp = newOtp.join('');
        console.log(combinedOtp);
    }

    const handleClick = (index)=>{
      InputRef.current[index].setSelectionRange(1,1);
    }

    const handleKeyDown = (index,e)=>{
      if(e.key === "Backspace" && !otp[index] && index>0 && InputRef.current[index-1]){
        InputRef.current[index-1].focus();
      }
    }

    useEffect(()=>{
      if(InputRef.current[0])
          InputRef.current[0].focus();
    },[])
    
  return (
    <div>
      <h1>Enter OTP sent to {phone} </h1>
      {
        otp.map((value,index)=>{
            return <input
                        type="text"
                        value={value}
                        className="otp"
                        ref={(input)=> (InputRef.current[index]=input)}
                        key={index}
                        onChange={(e)=>handleChange(index,e)}
                        onClick={()=>handleClick(index)}
                        onKeyDown={(e)=>handleKeyDown(index,e)}
                        />
        })
      }
    </div>
  )
}

export default OtpInput
