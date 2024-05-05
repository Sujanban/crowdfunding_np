import axios from "axios";

const uploadFile = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "uploads");
  data.append("cloud_name", "djxqgqy1c");

  const res = await axios.post(
    "https://api.cloudinary.com/v1_1/djxqgqy1c/image/upload",
    data
  );
  return res.data;
};

export default {uploadFile};
