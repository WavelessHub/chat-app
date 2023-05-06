function handleImage(event: any, setImage: any, setView: any) {
  const file = event.target.files[0];
  setImage(file);

  const reader = new FileReader();

  reader.onload = function (e) {
    setView(e.target?.result as string);
  };

  reader.readAsDataURL(file);
}

export default handleImage;
