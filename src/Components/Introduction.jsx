import banner from '../assets/banner.png';

function Introduction() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Premium Platform</h1>
            <p className="text-xl mb-8">Experience the future of financial management with our cutting-edge solutions.</p>
            <a href="#" className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">Get Started</a>
          </div>
          <div className="w-full md:w-1/2">
            <img src={banner} alt="Platform Preview" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;

