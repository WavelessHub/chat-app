interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return (
    <div>
      <img
        className="mx-auto h-16 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-3 mb-6 text-center text-3xl font-bold tracking-tight text-white">
        {text}
      </h2>
    </div>
  );
};

export default Heading;
