import React from 'react';
import './register.css';
import img1 from './images/05.jpg'
import {useForm} from 'react-hook-form'
const Register = () => {
    const { register, handleSubmit,watch,formState:{errors} } = useForm();
    const onSubmit = data => console.log(data);
    
    //console.log(watch('username'))
    return (
      <section>
        <div className="register">
          <div className="col-1">
            <h2 className="font-[700] text-center text-[45px]">Sign In</h2>
            <span className="font-[900] text-[30px]">
              register and enjoy the service
            </span>
            <form id="form" className="flex flex-col m-4 gap-4" onSubmit={handleSubmit()}>
              <input
                type="text"
                {...register("username")}
                placeholder="username"
                className="border-[1px] border-gray-400 p-2 px-4 outline-none pr-[80px]"
              />
              <input
                type="email"
                {...register("email")}
                placeholder="Email"
                className="border-[1px] border-gray-400 p-2 px-4 outline-none pr-[80px]"
              />
              <input
                type="text"
                {...register("password")}
                placeholder="password"
                className="border-[1px] border-gray-400 p-2 px-4 outline-none pr-[80px]"
              />
              <input
                type="text"
                {...register("confirm password")}
                placeholder="confirm password"
                className="border-[1px] border-gray-400 p-2 px-4 outline-none pr-[80px]"
              />
              <input
                type="text"
                {...register("mobile number",{required:true,maxLength:10})}
                placeholder="mobile number"
                className="border-[1px] border-gray-400 p-2 px-4 outline-none pr-[80px]"
                        />
                        {errors.mobile ?.type==="required" && "mobile Number is required"}
                        {errors.mobile ?.type==="required" && "mobile Number is required"}
              <button className="btn">Sign In</button>
            </form>
          </div>
          <div className="col-2">
            <img src={img1} alt="" />
          </div>
        </div>
      </section>
    );
}

export default Register
