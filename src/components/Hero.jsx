

import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Developing Websites. Leading Projects. 
          </h2>

          <div className="flex items-center gap-3">
          <ButtonPrimary
              label="Download CV"
              icon="download"
              href="/images/faizanRes.pdf"
              target="_blank"
              classes=""
            />



            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/heroban.png"
              width={656}
              height={800}
              alt=""
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero
