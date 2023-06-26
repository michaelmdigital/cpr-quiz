import React, { useState } from 'react';

const End = () => {



return (
  <div>
    <h2>🎉 Great job! No matter your score, you just took the first step to becoming a life-saver, but there is only so much you can learn about CPR online.</h2>
    <p>In-person CPR classes are essential as they offer hands-on practice, immediate feedback, and the opportunity to develop critical skills and confidence necessary for effective CPR in real emergencies.</p>
    <h2>Call Deb to Book your CPR Class Today!</h2>
    <div>
        <button>(619) 942-2000</button>
      </div>
    <br></br>  
    {/* <img src="https://cprchicks.com/wp-content/uploads/2019/04/CPR-classes-san-diego-CPR-chicks-.jpg" alt=""/> */}
    <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/nASXPZ8lstk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    <br></br>  
    <br></br> 
    <p>Return to cprchicks.com</p>
  </div>
);
};

export default End;
