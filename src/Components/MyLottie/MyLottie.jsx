import Lottie from 'lottie-react';
import animationData from './../../lottie.json';
const MyLottie = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // Direct reference to the imported JSON
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <div>
        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
      </div>
    );
};

export default MyLottie;