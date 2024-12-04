import PropTypes from 'prop-types';

function Step({ number, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 hover:shadow-xl hover:scale-105">
      <div className="flex items-center mb-4">
        <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
          {number}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function HowItWorks() {
  const steps = [
    {
      title: 'Create an Account',
      description: 'Sign up for free and complete your profile in minutes.',
    },
    {
      title: 'Deposit Funds',
      description: 'Add funds to your account using various payment methods.',
    },
    {
      title: 'Start Investing',
      description: 'Choose from a range of investment options and start growing your wealth.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <Step
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

