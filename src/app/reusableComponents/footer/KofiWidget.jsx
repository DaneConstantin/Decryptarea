'use client';
import { useEffect, useRef } from 'react';

const KofiWidget = () => {
  const widgetContainerRef = useRef(null); // Create a ref for the widget container

  useEffect(() => {
    if (typeof window !== 'undefined' && widgetContainerRef.current) {
      widgetContainerRef.current.innerHTML = `
        <a href='https://ko-fi.com/P5P2155XBV' target='_blank'>
          <img src='https://storage.ko-fi.com/cdn/kofi5.png?v=6' 
               style='border:0px;width:100%;height:auto;' 
               alt='Buy Me a Coffee at ko-fi.com' />
        </a>
      `;
    }
  }, []);

  return (
    <>
      {/* Container for the Ko-Fi widget */}
      <div
        ref={widgetContainerRef} // Ref pointing to the div where the widget will be rendered
        style={{
          width: '100%',
          maxWidth: '200px',
          height: 'auto',
         
          overflow: 'hidden',
        }}
      />
    </>
  );
};

export default KofiWidget;
