interface Props {
  rounded: "full" | "medium";
  error: string;
}

const Error = ({ rounded, error }: Props) => {
  if (!error) return null;

  return (
    <div
      className={
        "bg-red-100 border-none text-sm font-medium text-red-700 px-4 py-[10px] " +
        (rounded === "full" ? "rounded-md" : "rounded-b-md")
      }
    >
      {error}
    </div>
  );
};

export default Error;
