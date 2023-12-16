import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect } from 'react';
import { useState } from 'react';
// import ClockLoader from "react-spinners/ClockLoader";
import { RotatingSquare} from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import Count from './Count';
import First from './First';
import './all.min.css'
import Slider from './Slider';
import Paralex from './Paralex';
import Date from './Date';
import After_before from './After_before';
import Footer from './Footer';
import Icon from './Icon';
import Top from './Top';
import Multi from './Multi';
import Icon2 from './Icon_2';
import Icon3 from './Icon_3';

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },5000)
  }, [])

  return (
    <div className="App">
      {

        loading ?
          <RotatingSquare
            color={'#bb9d7b'}
            height={70}
            strokeWidth={5}
            />
          :

          <div>
            <First />
            <Slider />
            <Icon />
            <Count />
            <After_before />
            <Icon2/>
            <Date />
            <Paralex />
            <Icon3/>
            <Multi />
            <Footer />
            <Top />
          </div>
      }
    </div>
  );
}

export default App;