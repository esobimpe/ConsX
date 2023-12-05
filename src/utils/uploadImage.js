import axios from "axios";
import toast from "react-hot-toast";

async function uploadImage(file) {
  const uploadPreset = "y71kqrjf"
  const cloudName = "dn8auhjx2"

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    if (response.status === 200) {
      return response.data.secure_url;
    } else {
      toast.error(response.data.message || "Failed to upload image");
      throw new Error(response.data.message || "Failed to upload image");
    }
  } catch (error) {
    throw new Error("Failed to upload image");
  }
}

export default uploadImage;