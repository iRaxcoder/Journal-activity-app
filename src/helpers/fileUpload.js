export const fileUpload = async (file) => {
  const cloudUrl = " https://api.cloudinary.com/v1_1/dwhc2wdzi/upload";
  const formData = new FormData();

  formData.append("upload_preset", "journal-project");
  formData.append("file", file);
  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (!resp.ok) throw new Error("Failure when uploading images");

    const cloudResp = await resp.json();

    return cloudResp.secure_ulr;
  } catch (error) {
    console.log(error);
  }
};
