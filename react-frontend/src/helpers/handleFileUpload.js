import convertToBase64 from "./convertToBase64";

export default async function handleFileUpload (e) {
  const file = e.target.files[0];
  if (file.size > 1607152) {
    alert("File is too big!");
    imageRef.current.value = "";
    return;
  }
  const base64 = await convertToBase64(file);
  setFiles(base64);
};

// module.exports = handleFileUpload;