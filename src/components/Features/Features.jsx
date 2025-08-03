import "./index.css";
import Ghost from "/assets/icons/Ghost.svg";
import Fishing from "/assets/icons/Fishing.svg";
import CircusTent from "/assets/icons/Circus-Tent.svg";
import Caduceus from "/assets/icons/Caduceus.svg";
import Winter from "/assets/icons/Winter.svg";
import Geiger from "/assets/icons/Remote Control.svg";

const features = [
  { title: "Ghost Hunting", icon: Ghost, desc: "Explore multiple worlds..." },
  { title: "Fishing", icon: Fishing, desc: "Drop your bait..." },
  { title: "Carnival Game", icon: CircusTent, desc: "Enter the carnival..." },
  { title: "Surgery", icon: Caduceus, desc: "Carry out complex surgeries..." },
  {
    title: "WinterFest “GrowCH”",
    icon: Winter,
    desc: "The Growch is an NPC...",
  },
  { title: "Geiger Counter", icon: Geiger, desc: "With this handy device..." },
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
