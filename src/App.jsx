import React from 'react'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
function App() {
  
  const {
    register,
    handleSubmit,
    watch, reset, setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay=(d)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve()
        }, d * 1000);
    })
  }
  const onSubmit= async (data)=>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(data.confirmpassword===data.password){
    await delay (2);
        console.log(data)
        reset();
        toast.success('SUBMITTED SUCCESSFULLY!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light"
          });}
     else {
            setError("confirmpassword",{message:"Your Password and Confirm Password doesn't match"})
          }
      }
  return (
    <>
<ToastContainer />
<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
<div className="subcontainer  flex flex-col items-center ">
<div className="registration text-2xl text-white">REGISTRATION FORM</div>
<div className="img mt-12"><img className="w-24 rounded-md border border-white p-1" src="./images/man.jpeg" alt="" /></div>

    <form action="" onSubmit={handleSubmit(onSubmit)}>
<div className="name flex gap-5 mt-3 rounded-md">
    <div className="firstname">
    <div className="border border-white rounded-md">
    <input className="m-1 pl-2 outline-none" {...register("name",{required:{value:true,message:"This field is required"}})} type="text" placeholder="First Name"/>
    </div>
    {errors.name&&<div className="text-red-600 flex justify-start ml-1">{errors.name.message}</div>}
    </div>
    <div className="lastname">
    <div className="border border-white rounded-md">
    <input className="m-1 pl-2 outline-none" {...register("lastname",{required:{value:true,message:"This field is required"}})} type="text" placeholder="Last Name"/>
    </div>
    {errors.name&&<div className="text-red-600 flex justify-start ml-1">{errors.name.message}</div>}
    </div>
</div>
<div className="username mb-4">
<div className="relative flex border rounded-md mt-7">
    <input className="m-1 w-full pl-2 outline-none" {...register("username",{required:{value:true,message:"This field is required"}})} type="text" placeholder="Username" /><span className="absolute w-6 right-2 top-1"><img src="./images/user.png" alt="" /></span>
    </div>
    {errors.username&&<div className="text-red-600 flex justify-start ml-1">{errors.username.message}</div>}
    </div>
    <div className="email mb-4">
    <div className="relative flex border rounded-md ">
    <input className="m-1 w-full pl-2 outline-none" {...register("email",{required:{value:true,message:"This field is required"}})} type="email" placeholder="Email" /><span className="absolute w-6 right-2 top-1"><img src="./images/mail.png" alt="" /></span>
    </div>
    {errors.email&&<div className="text-red-600 flex justify-start ml-1">{errors.email.message}</div>}
    </div>
    <div className="phone mb-4">
    <div className="relative flex border rounded-md">
    <input className="m-1 w-full pl-2 outline-none" {...register("phone",{required:{value:true,message:"This field is required"}})} type="tel" placeholder="Tel. Number" /><span className="absolute w-5 right-2 top-1.5"><img src="./images/phone-call.png" alt="" /></span>
    </div>
    {errors.phone&&<div className="text-red-600 flex justify-start ml-1">{errors.phone.message}</div>}
    </div>
    <div className="password mb-4">
    <div className="relative flex border rounded-md">
    <input className="m-1 w-full pl-2 outline-none" {...register("password",{required:{value:true,message:"This field is required"},minLength:{value:8,message:"Min. length is 8"},maxLength:{value:15,message:"Max. length is 15"}})} type="password" placeholder="Password" /><span className="absolute w-5 right-2 top-1.5"><img src="./images/padlock.png" alt="" /></span>
    </div>
    {errors.password&&<div className="text-red-600 flex justify-start ml-1">{errors.password.message}</div>}
    </div>
    <div className="confirmpassword mb-4">
    <div className="relative flex border rounded-md">
    <input className="m-1 w-full pl-2 outline-none" {...register("confirmpassword",{required:{value:true,message:"This field is required"}})} type="password" placeholder="Confirm Password" /><span className="absolute w-5 right-2 top-1.5"><img  src="./images/padlock.png" alt="" /></span>
    </div>
    {errors.confirmpassword&&<div className="text-red-600 flex justify-start ml-1">{errors.confirmpassword.message}</div>}
    </div>
    <div className="flex justify-center">
    <div className="button border w-44 pr-2 rounded-md">
        <button disabled={isSubmitting} className="m-1 w-full  text-black font-bold bg-white" type="submit">SUBMIT</button>
    </div>
    </div>
    {isSubmitting&&<div className='text-red-600'>Loading...</div>}
    </form>
</div>
</>
  )
}

export default App