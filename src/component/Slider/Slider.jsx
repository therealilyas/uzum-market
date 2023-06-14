import "./slider.css";
import { Carousel } from "react-carousel-minimal";
import sliderData from "../../data/slidederData";
function Slider() {
  const data = sliderData;
  return (
    <>
      <div
        style={{
          textAlign: "center",
        }}
        className="main-slider"
      >
        <Carousel
          className="slider"
          data={data}
          time={3000}
          width="100%"
          height="auto"
          captionStyle={{ display: "none" }}
          radius="10px"
          slideNumber={true}
          slideNumberStyle={{ display: "none" }}
          captionPosition="bottom"
          automatic={true}
          dots={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          thumbnails={false}
        />
      </div>
    </>
  );
}

export default Slider;
