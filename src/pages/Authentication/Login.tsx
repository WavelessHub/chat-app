import { Button, Error, Footer, Heading, Input } from "./common";
import { schema, FormData } from "../schema/loginSchema";
import { useState } from "react";

import useValidation from "../Hooks/useValidation";
import useLogin from "../Hooks/useLogin";

const Login = () => {
  const [err, setError] = useState(false);

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useValidation<FormData>(schema);

  const onSubmit = async (data: FormData) => {
    try {
      await useLogin(data, setError);

      reset();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#a7bcff] flex items-center justify-center">
      <div className="w-screen max-w-md space-y-6">
        <Heading text="Sign in to your Account" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-8 pb-8 pt-4 rounded-[8px] shadow-md"
        >
          {err && <Error rounded="full" error="Incorrect Email / Password" />}

          <div>
            <Input
              title="Email"
              name="email"
              type="email"
              register={register}
              error={errors.email?.message || ""}
            />

            <Input
              title="Password"
              name="password"
              type="password"
              register={register}
              error={errors.password?.message || ""}
            />
          </div>

          <div className="my-5 ml-[2px] flex justify-between items-center">
            <div className="text-indigo-600 font-medium text-sm cursor-pointer hover:underline decoration-[1.5px]">
              Forgot your password?
            </div>
          </div>

          <div>
            <Button text="Sign In" />
            <Footer type="login" url="/register" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// <div className="flex items-center py-4 mt-2 mb-2">
//   <div className="flex-grow h-[2px] bg-gray-300"></div>
//
//   <span className="flex-shrink dark:bg-gray-700 px-4 text-gray-500">
//     Or continue with
//   </span>
//
//   <div className="flex-grow h-[2px] bg-gray-300"></div>
// </div>;

// <button className="flex items-center justify-center border-[2px] border-gray-300 rounded-md p-3 w-full hover:bg-slate-100">
//   <i className="bx bxl-google text-[24px] text-gray-500"></i>
//   <div className="text-gray-500 font-medium">
//     <i className="fa-brands fa-microsoft fa-lg"></i>
//   </div>
// </button>
