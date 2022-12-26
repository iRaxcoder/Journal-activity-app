import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList
      sx={{ width: "100%", height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={164}
    >
      {images.map((image, index) => (
        <ImageListItem key={index} cols={1} rows={1}>
          <img src={image} alt={"note image"} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
