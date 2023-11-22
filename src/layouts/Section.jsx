import Home from 'pages/Home/Home';
import React from 'react';

const Section = (props) => {
  return (
    <>
      <section>
      {props.children}
      </section>
    </>
  );
};

export default Section;
