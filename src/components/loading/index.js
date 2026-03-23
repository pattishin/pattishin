import loadingAnimation from '../../assets/animated.gif';
import './Loading.css';

function Loading() {
  return (
    <div className="loadingContainer">
      <img src={loadingAnimation} className="logoAnimation" alt="logo"/>
      <p>Dialing in ...</p>
    </div>
  );
}

export default Loading;

