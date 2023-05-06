import handleImage from "../../Hooks/useImage";

interface Props {
  view: string;
  setImage: any;
  setView: any;
}

const ImageInput = ({ view, setImage, setView }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <input
        id="avatar"
        type="file"
        className="hidden"
        onChange={(event) => handleImage(event, setImage, setView)}
      />

      <label
        htmlFor="avatar"
        className="bg-white cursor-pointer ml-1 mt-6 mb-6 text-sm font-semibold text-indigo-500 hover:underline decoration-[1.5px]"
      >
        Add a Profile Picture
      </label>

      {view && (
        <img className="h-11 w-11 rounded-full mr-1 object-cover" src={view} />
      )}
    </div>
  );
};

export default ImageInput;
