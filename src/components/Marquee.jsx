import './Marquee.css';

const MARQUEE_ITEMS = [
  'AI Automation',
  'Web Development',
  'App Development',
  'Machine Learning',
  'API Integration',
  'Custom Chatbots',
  'SaaS Platforms',
  'Mobile Apps',
  'Workflow Automation',
];

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, index) => (
        <span className="marquee__item" key={index}>
          <span className="marquee__separator" aria-hidden="true" />
          {item}
        </span>
      ))}
    </>
  );
}

export function Marquee() {
  return (
    <div className="marquee" aria-label="Our services ticker">
      <div className="marquee__track">
        {/* Render content twice for seamless infinite loop */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
