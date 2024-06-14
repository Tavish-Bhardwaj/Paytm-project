import React from 'react'
import {BottomWarning} from '../components/BottomWarning'
import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {SubHeading} from '../components/SubHeading'



const Signup = () => {
  return (
    <div className= "bg-slate-300 h-screen flex justify-center ">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"}/>
                <SubHeading label={"Enter your Information to create an account"}/>
                <InputBox label={"First Name"} placeholder="John"/>
                <InputBox label={"Last Name"} placeholder="Doe"/>
                <InputBox label={"Email"} placeholder="tavish@gmail.com"/>
                <InputBox label={"Password"} placeholder="123456"/>
                <div className="pt-4">
                <Button label="Sign Up"/>
                </div>

                <BottomWarning label={"Already have an account?"} buttonText={"Sign In"} to={"/signin"}/>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
