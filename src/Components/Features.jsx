
import PropTypes from 'prop-types';

function FeatureCard(props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-4xl mb-4 text-blue-500">{props.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
      <p className="text-gray-600">{props.description}</p>
    </div>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

function Features() {
  const features = [
    {
      icon: '💰',
      title: 'Easy Deposits',
      description: 'Securely deposit funds with just a few clicks.',
    },
    {
      icon: '🔄',
      title: 'Quick Withdrawals',
      description: 'Access your funds whenever you need them.',
    },
    {
      icon: '📈',
      title: 'Smart Investments',
      description: 'Grow your wealth with our intelligent investment strategies.',
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(function(feature, index) {
            return (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;

