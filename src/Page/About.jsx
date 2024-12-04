import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <HeroSection />
      <OurMissionSection />
      <OurTeamSection />
      <OurValuesSection />
      <Footer />
    </div>
  );
};


const HeroSection = () => (
  <section className="bg-blue-600 text-white py-20">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="text-xl mb-8">We are on a mission to revolutionize the industry</p>
      <a href="#" className="bg-white text-blue-600 py-2 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
        Learn More
      </a>
    </div>
  </section>
);

const OurMissionSection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Mission</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-6">
          <p className="text-gray-600 text-lg leading-relaxed">
            At Our Company, we strive to create innovative solutions that transform the way people interact with technology. 
            Our goal is to simplify complex processes and make cutting-edge tools accessible to everyone.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-6">
          <img 
            src="/placeholder.svg?height=300&width=400" 
            alt="Our Mission" 
            className="rounded-lg shadow-md hover:shadow-xl transition duration-300"
          />
        </div>
      </div>
    </div>
  </section>
);

const OurTeamSection = () => {
  const teamMembers = [
    { name: "John Doe", role: "CEO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Jane Smith", role: "CTO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Mike Johnson", role: "Lead Designer", image: "/placeholder.svg?height=200&width=200" },
    { name: "Sarah Brown", role: "Marketing Director", image: "/placeholder.svg?height=200&width=200" },
  ];

  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OurValuesSection = () => {
  const values = [
    { title: "Innovation", description: "We constantly push the boundaries of what's possible." },
    { title: "Integrity", description: "We uphold the highest standards of honesty and ethics." },
    { title: "Collaboration", description: "We believe in the power of teamwork and diverse perspectives." },
    { title: "Excellence", description: "We strive for excellence in everything we do." },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:bg-blue-50 transition duration-300">
              <h3 className="font-bold text-xl mb-2 text-blue-600">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;

