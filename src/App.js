import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import { RotatingSquare } from 'react-loader-spinner'
import 'bootstrap/dist/css/bootstrap.min.css';
import './all.min.css'

const Count = lazy(() => import('./Count'));
const First = lazy(() => import('./First'));
const Slider = lazy(() => import('./Slider'));
const Icon = lazy(() => import('./Icon'));
const AfterBefore = lazy(() => import('./After_before'));
const Icon2 = lazy(() => import('./Icon_2'));
const Date = lazy(() => import('./Date'));
const Paralex = lazy(() => import('./Paralex'));
const Icon3 = lazy(() => import('./Icon_3'));
const Multi = lazy(() => import('./Multi'));
const Footer = lazy(() => import('./Footer'));
const Top = lazy(() => import('./Top'));

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
      <Suspense fallback={<RotatingSquare color={'#bb9d7b'} height={70} strokeWidth={5} />}>
        {loading ? (
          <RotatingSquare color={'#bb9d7b'} height={70} strokeWidth={5} />
        ) : (
          <div>
            <First />
            <Slider />
            <Icon />
            <Count />
            <AfterBefore />
            <Icon2 />
            <Date/>
            <Paralex />
            <Icon3 />
            <Multi />
            <Footer />
            <Top />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;