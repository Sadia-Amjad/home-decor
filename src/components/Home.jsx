import heroImg from "../assets/hero.jpg"; // 🖼️ Add your image in src/assets/

function Home() {
  return (
    <section className="flex items-center justify-between px-20 py-10 bg-white min-h-[80vh]">
      {/* Left Content */}
      <div className="max-w-[50%] mt-2">
        <h1 className="text-5xl font-bold leading-tight mb-5">
          Transform Your Space with Elegance
        </h1>
        <p className="text-gray-600 text-xl mb-8">
          Discover premium furniture and decor to create a cozy, stylish home.
        </p>
        <button className="bg-[#a8744f] text-white py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300 hover:bg-[#8c6239]">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div className="home-image">
        <img
          src={heroImg}
          alt="Home Decor"
          className="w-[450px] h-auto rounded-xl shadow-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}

export default Home;
