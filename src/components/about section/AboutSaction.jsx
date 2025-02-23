"use client";

const AboutSaction = () => {
  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6 md:px-10">
      {/* Left Side (Image) */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <img
          className="w-[300px] sm:w-[400px] md:w-[500px] h-auto rounded-lg shadow-lg"
          src="/assets/images/about_us/person.jpg"
          alt="person"
        />
        <div className="absolute bottom-0 sm:-bottom-8 right-10 sm:right-16 lg:right-18">
          <img
            className="border-4 sm:border-8 border-white w-[200px] sm:w-[260px] md:w-[300px] lg:w-[327px] rounded-lg"
            src="/assets/images/about_us/parts.jpg"
            alt="parts"
          />
        </div>
      </div>
  
      {/* Right Side (Text Content) */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-red-500 font-bold text-lg">About Us</h3>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 leading-snug">
          We are qualified & <br className="hidden sm:block" /> have experience in this field
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority
          Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words Which
          Don't Look Even Slightly Believable.
        </p>
        <p className="text-gray-600 mt-4 text-sm md:text-base">
          The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised
          Words Which Don't Look Even Slightly Believable.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 text-white font-semibold rounded-md shadow-md hover:bg-red-600 transition duration-300">
          Get More Info
        </button>
      </div>
    </div>
  </section>
  
  );
};

export default AboutSaction;
