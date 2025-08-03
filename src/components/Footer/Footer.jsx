import "./index.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-background">
        <div className="footer-background-bottom" />
          <div className="footer-container">
            {/* About */}
            <div className="footer-card">
              <h5 className="footer-title">About AsiaPS</h5>
              <p className="footer-text">
                Asia is a GTPS built in such a way as to provide the best
                playing experience and is not monotonous.
              </p>
            </div>

            {/* Community */}
            <div className="footer-card">
              <h5 className="footer-title">Asia Community</h5>
              <ul className="footer-list">
                <li>
                  <img src="/assets/icons/WhatsApp.svg" alt="WhatsApp" />{" "}
                  WhatsApp Group
                </li>
                <li>
                  <img src="/assets/icons/Discord.svg" alt="Discord" /> Discord
                  Server
                </li>
                <li>
                  <img src="/assets/icons/People.svg" alt="Community" />{" "}
                  Community Active
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-card">
              <h5 className="footer-title">Asia Contact</h5>
              <p className="footer-text">
                If you need any help or reporting bugs, please create a ticket
                on the Discord server.
              </p>
              <div className="footer-icons">
                <a
                  href="https://chat.whatsapp.com/H5CTMiuw8yw4UsBVdMkfEL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/icons/WhatsApp-1.svg" alt="WhatsApp" />
                </a>
                <a
                  href="https://discord.gg/HzTjfwfk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/icons/Discord New.svg" alt="Discord" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 AsiaPS Team. All rights reserved.
          </div>
        </div>
    </div>
  );
};

export default Footer;
