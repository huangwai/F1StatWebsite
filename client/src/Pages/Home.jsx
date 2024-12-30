import React from "react";

const Home = () => {
  return (
    <div>
      <h1>ADD TITLE HERE</h1>
      <p>ADD HERO STATEMENT HERE</p>
      <p>ADD HERO STATEMENT BUTTON HERE</p>
      <p>ADD Navigation Buttons Here</p>
      {/* <img
        src={`../images/albumcovers/heroimg2.jpg?w=164&h=164&fit=crop&auto=format`}
        srcSet={`../images/albumcovers/heroimg2.jpg?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={"Hero Image"}
        height = 'auto'
        width = 'auto'
        margin = 'auto'
        loading="lazy"
      /> */}
      {/* {images.map((image, index) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: "100vw",
            border: "none",
          }}
          href={image.link}
        >
          <ImageSrc
            style={{
              backgroundImage: `url(${Background})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover", // Ensures the image covers the container
              backgroundAttachment: "fixed", // Makes the background static
              backgroundPosition: "center", // Centers the image
            }}
          />

          <ImageBackdrop className="MuiImageBackdrop-root" />

          <Image loading="lazy">
            <Typography
              component="span"
              variant="subject1"
              color="inherit"
              outline="none"
              border="none"
              sx={{
                position: "relative",
                p: 4,
                pt: 2,
                outline: "none",
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))} */}
    </div>
  );
};

export default Home;
