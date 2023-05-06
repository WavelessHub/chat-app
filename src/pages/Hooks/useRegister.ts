import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../database/firebase";
import { FormData } from "../schema/registerSchema";

const useRegister = async (
  { displayName, email, password }: FormData,
  image: File
) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  const storageRef = ref(storage, displayName);

  if (checkEmpty(image)) {
    await uploadBytes(storageRef, image, {
      contentType: "image/png",
    }).then(async (snapshot) => {
      await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
        await updateProfile(res.user, {
          displayName,
          photoURL: downloadURL,
        });
      });
    });
  } else {
    await updateProfile(res.user, {
      displayName,
      photoURL:
        "https://firebasestorage.googleapis.com/v0/b/chat-application-caee9.appspot.com/o/profile-picture.webp?alt=media&token=a6d415fa-90d3-40fa-82fd-c88c7611b6a6",
    });
  }

  console.log(res.user);

  const {
    metadata: { creationTime, lastSignInTime },
    email: userEmail,
    phoneNumber,
    photoURL,
    uid,
  } = res.user;

  await setDoc(doc(db, "users", res.user.uid), {
    displayName,
    email: userEmail,
    metadata: { creationTime, lastSignInTime },
    phoneNumber: phoneNumber || "",
    photoURL,
    uid,
  });

  await setDoc(doc(db, "userChats", res.user.uid), {});
};

export function checkEmpty(image: File) {
  for (const value in image) {
    return value && true;
  }
}

export default useRegister;
