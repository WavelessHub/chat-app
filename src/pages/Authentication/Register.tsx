import { Heading, Input, ImageInput, Button, Footer } from "./common";
import { schema, FormData } from "../schema/registerSchema";
import { useState } from "react";

import useRegister from "../Hooks/useRegister";
import useValidation from "../Hooks/useValidation";

const Register = () => {
  const [image, setImage] = useState({} as File);
  const [err, setError] = useState(false);
  const [view, setView] = useState("");

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useValidation<FormData>(schema);

  const onSubmit = async (data: FormData) => {
    try {
      await useRegister(data, image);

      setImage({} as File);
      setView("");
      reset();
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="h-screen w-screen bg-[#a7bcff] flex items-center justify-center">
      <div className="w-screen max-w-md">
        <Heading text="Register your Account" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white px-8 pb-8 pt-4 rounded-[8px] shadow-md"
        >
          <div>
            <Input
              title="Display Name"
              name="displayName"
              type="text"
              register={register}
              error={errors.displayName?.message || ""}
            />

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

            <ImageInput view={view} setImage={setImage} setView={setView} />
          </div>

          <div>
            <Button text="Register" />
            <Footer type="register" url="/login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
