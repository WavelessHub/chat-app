import Error from "./Error";

interface Props {
  register: any;
  title: string;
  error: string;
  name: string;
  type: string;
}

const Input = ({ title, type, name, register, error }: Props) => {
  return (
    <div className="mt-3">
      <div className="ml-1 mb-2 font-medium text-gray-600">{title}</div>

      <input
        {...register(name)}
        type={type}
        name={name}
        className={`${
          error ? "rounded-t-md rounded-b-none" : "rounded-md"
        } relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm pt-3 pb-3 pl-4`}
      />

      <Error rounded="medium" error={error} />
    </div>
  );
};

export default Input;
