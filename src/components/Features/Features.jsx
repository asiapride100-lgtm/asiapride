import './index.css';

const features = [
  { title: "Ghost Hunting", icon: "/assets/icons/Ghost.svg", desc: "Explore multiple worlds to hunt otherworldly creatures with special tools and collect exclusive ghostly treasures." },
  { title: "Fishing", icon: "/assets/icons/Fishing.svg", desc: "Drop your bait into enchanted waters, uncover mythical fish, and become a digital fishing expert." },
  { title: "Carnival Game", icon: "/assets/icons/Circus-Tent.svg", desc: "Enter the carnival of wonders, purchase a golden ticket to unlock thrilling games, and chase fabulous prizes in a world of excitement." },
  { title: "Surgery", icon: "/assets/icons/Caduceus.svg", desc: "Carry out complex surgeries, rescue critical patients, and gain access to cutting-edge medical tools and skills." },
  { title: "WinterFest “GrowCH”", icon: "/assets/icons/Winter.svg", desc: "The Growch is an NPC present during WinterFest in the world GROWCH. While the Growch is unhappy, players need to form a global team effort to unlock new WinterFest items." },
  { title: "Geiger Counter", icon: "/assets/icons/Remote Control.svg", desc: "With this handy device, you can detect radiation. As you get closer to the source, the device will ping red, then yellow, then green for the closest." },
];

const Features = () => {
  return (
    <div className="features-wrapper" id="Features">
      <h2 className="features-title">Feature AsiaPS</h2>
      <div className="features-grid">
        {features.map((item, i) => (
          <div className="feature-card" key={i}>
            <img className="feature-icon" src={item.icon} alt={item.title} />
            <h3 className="feature-name">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
