import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import pic1 from './../../../assets/1 (2).png'
import pic2 from './../../../assets/2 (2).png'
import pic3 from './../../../assets/3 (2).png'
import pic4 from './../../../assets/4 (2).png'
import pic5 from './../../../assets/5 (2).png'
import pic6 from './../../../assets/6 (2).png'
import pic7 from './../../../assets/7 (2).png'
import pic8 from './../../../assets/8 (2).png'
import pic9 from './../../../assets/9 (2).png'
import pic10 from './../../../assets/10 (2).png'
import pic11 from './../../../assets/11 (2).png'
import pic12 from './../../../assets/12 (2).png'
import pic13 from './../../../assets/13 (2).png'
import pic14 from './../../../assets/14 (2).png'
import pic15 from './../../../assets/15 (2).png'
import pic16 from './../../../assets/16.png'
// import pic1 from './../../../assets/1 (2).png'



const AutoplaySlider = withAutoplay(AwesomeSlider);

const Review = () => {
  return (
    <div className="pb-16">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={2000}
        style={{ height: "250px",  }} 
      >
        <div className="custom-slide"><img  src={pic1} alt="" /></div>
        <div className="custom-slide"><img  src={pic2} alt="" /></div>
        <div className="custom-slide"><img  src={pic3} alt="" /></div>
        <div className="custom-slide"><img  src={pic4} alt="" /></div>
        <div className="custom-slide"><img  src={pic5} alt="" /></div>
        <div className="custom-slide"><img  src={pic6} alt="" /></div>
        <div className="custom-slide"><img  src={pic7} alt="" /></div>
        <div className="custom-slide"><img  src={pic8} alt="" /></div>
        <div className="custom-slide"><img  src={pic9} alt="" /></div>
        <div className="custom-slide"><img  src={pic10} alt="" /></div>
        <div className="custom-slide"><img  src={pic11} alt="" /></div>
        <div className="custom-slide"><img  src={pic12} alt="" /></div>
        <div className="custom-slide"><img  src={pic13} alt="" /></div>
        <div className="custom-slide"><img  src={pic14} alt="" /></div>
        <div className="custom-slide"><img  src={pic15} alt="" /></div>
        <div className="custom-slide"><img  src={pic16} alt="" /></div>
      </AutoplaySlider>
    </div>
  );
};

export default Review;