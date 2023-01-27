import ImageSlider, { Slide } from "react-auto-image-slider";
import img1 from '../images/bg-1.jpg'
import img2 from '../images/bg-2.jpg'
import img3 from '../images/bg-7.jpg'


const Homee=()=> {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={1600}>
      <Slide>
        <img alt="" src={img1} />
      </Slide>
      <Slide>
        <img alt="" src={img2} />
      </Slide>
      <Slide>
        <img alt="" src={img3} />
      </Slide>
    </ImageSlider>
  );
}

export default Homee;
