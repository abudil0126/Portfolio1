import "./about.css"

const About = () => {
  return (
    <>
      <div className='hero'>
        <div className='hero__title'>
          <p className="hero__text">My name is</p>
          <h1 className="hero__name">Sultonaliyev Abdulloh</h1>
          <p className="hero__info">I'm Frontend Developer</p>
        </div>
        <div className='about__info'>
          <p className="exp">I have experience in:</p>
          <p className="info__skills">
            HTML5 / CSS3 / SCSS / JAVASCRIPT / REACT.JS  NEXT.JS / REDUX / REDUX-TOOLKIT / GIT / GITHUB  BOOTSTRAP5
          </p>
        </div>
      </div>
      <div className="container">
        <section className="about__title">
          <div className="profile">
          <h2 className="pro__h2">PROFILE</h2>
          <p className="pro__p">Hello. I am 15 years old and I was born in the city of Tashkent, Uzbekistan. I am fond of football and like to play video games in my free time. In the future I want to become a senior programmer.</p>
          </div>
          <div className="education">
            <h2 className="edu__h2">EDUCATION</h2>
            <h4 className="edu__h4">Jun 2023 - Feb 2024</h4>
            <h3 className="edu__h3">Education Center Najot Ta'lim</h3>
            <h4 className="edu__h4">Sep 2015 - May 2024</h4>
            <h3 className="edu__h3">General Education Secondary School No. 326</h3>
            <h4 className="edu__h4">Languages: <i>English, Russian</i></h4>
          </div>
        </section>
        <p className="copyright1">Copyright ©2024 All rights reserved</p>
      </div>
    </>
  )
}

export default About