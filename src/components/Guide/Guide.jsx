import HostsDownloadButton from "./HostDonwload/FileHostDownload.jsx";
import React, { useState } from "react";
import CopyIcon from "/assets/icons/Copy.svg";
import "./index.css";

import windowsIcon from "/assets/icons/laptop.svg";
import androidIcon from "/assets/icons/android.svg";
import appleIcon from "/assets/icons/apple.svg";
import macIcon from "/assets/icons/macOs.png";

const platformIcons = {
  Windows: windowsIcon,
  Android: androidIcon,
  iOS: appleIcon,
  MacOS: macIcon,
};

const guideContents = {
  // Windows
  Windows: {
    title: "Windows Connection Guide",
    beforeCodeSteps: [
      <>
        Press <span className="highlight-green">Win + R</span> to open the Run
        dialog
      </>,
      <>
        Type{" "}
        <span className="highlight-green">C:\Windows\System32\drivers\etc</span>{" "}
        and press Enter
      </>,
      <>
        Locate the <span className="highlight-green">hosts</span> file in the
        directory
      </>,
      <>
        Right-click on <span className="highlight-green">hosts</span> and select{" "}
        <span className="highlight-green">"Open with" → Notepad</span>
      </>,
      <>Add these server entries at the end of the file:</>,
    ],
    code: `202.10.42.93 growtopia1.com
202.10.42.93 growtopia2.com
202.10.42.93 www.growtopia1.com
202.10.42.93 www.growtopia2.com
202.10.42.93 RuLnd.here`,
    afterCodeSteps: [
      <>
        Save the file (<span className="highlight-green">Ctrl + S</span>) and
        close Notepad
      </>,
      <>
        Launch <span className="highlight-green">Growtopia</span> and enjoy the
        New experience!
      </>,
    ],
  },
  // Android
  Android: {
    title: "Android Connection Guide",
    methods: [
      {
        methodTitle: "Method 1: Virtual Hosts",
        steps: [
          "Download the Virtual Hosts application",
          "Install the Virtual Hosts app on your device",
          <>
            Download our hosts configuration: <HostsDownloadButton />
          </>,
          "Open Virtual Hosts and select the downloaded Host",
          "Enable the configuration by checking the green checkbox & Launch Growtopia For connect to AsiaPS!",
        ],
      },
      {
        methodTitle: "Method 2: Power Tunnel",
        steps: [
          "Download the Power Tunnel application",
          "Add this Hosts File URL:",
        ],
        code: `https://gtpshost.com/AsiaTest.txt`,
        afterCodeSteps: [
          'Set "Hosts file update" to "On start"',
          "Click Connect, then launch Growtopia",
        ],
      },
    ],
  },
  //  IOS
  iOS: {
    title: "iOS Connection Guide",
    beforeCodeSteps: [
      "Download Surge 5 from the App Store",
      'Open Surge 5 and tap "Default" at the top',
      'Select "Download Profile with URL"',
      "Enter this profile URL:",
    ],
    code: `https://ios.gtpshost.com/AsiaTest`,
    afterCodeSteps: [
      "Tap OK to download and install the profile",
      'Press "Start" to activate the connection',
      "Launch Growtopia and enjoy AsiaPS!",
    ],
  },
  // MacOs
  MacOS: {
    title: "MacOS Connection Guide",
    beforeCodeSteps: [
      "Open Terminal (Applications → Utilities → Terminal)",
      <>
        Run this command:{" "}
        <span className="highlight-green">sudo nano /etc/hosts</span>
      </>,
      "Enter your admin password when prompted",
      "Add these lines at the end of the file:",
    ],
    code: `202.10.42.93 growtopia1.com
202.10.42.93 growtopia2.com
202.10.42.93 www.growtopia1.com
202.10.42.93 www.growtopia2.com
202.10.42.93 RuLnd.here`,
    afterCodeSteps: [
      "Press Ctrl + X, then Y, then Enter to save",
      "Launch Growtopia and connect to AsiaPS!",
    ],
  },
};

const Guide = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("Windows");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(guideContents[selectedPlatform].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="guide-wrapper" id="Guide">
      <div className="guide-background">
        <h2 className="guide-title">How To Play AsiaPS</h2>
        <p className="guide-subtitle">Choose which platform you use</p>

        <div className="guide-buttons">
          {Object.keys(guideContents).map((platform) => (
            <button
              key={platform}
              className={`guide-btn ${
                selectedPlatform === platform ? "active" : ""
              }`}
              onClick={() => setSelectedPlatform(platform)}
            >
              <img
                src={platformIcons[platform]}
                alt={platform}
                className="platform-icon"
              />
              {platform}
            </button>
          ))}
        </div>

        <div className="guide-content">
          <h4>{guideContents[selectedPlatform].title}</h4>

          {/* Android khusus pakai method-based rendering */}
          {selectedPlatform === "Android" ? (
            <>
              {guideContents.Android.methods.map((method, index) => (
                <div key={index} className="android-method">
                  <h5>{method.methodTitle}</h5>
                  <ol>
                    {method.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>

                  {method.code && (
                    <div className="code-block">
                      <pre>{method.code}</pre>
                      <button
                        className="copy-btn"
                        onClick={() => {
                          navigator.clipboard.writeText(method.code);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        }}
                      >
                        <img
                          src={CopyIcon}
                          alt="Copy"
                          className="copy-icon-image"
                        />
                      </button>
                      {copied && (
                        <span className="copy-notification">Copied!</span>
                      )}
                    </div>
                  )}

                  {method.afterCodeSteps && (
                    <ol start={(method.steps?.length || 0) + 1}>
                      {method.afterCodeSteps.map((step, idx) => (
                        <li key={`after-${idx}`}>{step}</li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
            </>
          ) : (
            <>
              <ol>
                {guideContents[selectedPlatform].beforeCodeSteps?.map(
                  (step, idx) => (
                    <li key={`before-${idx}`}>{step}</li>
                  )
                )}
              </ol>

              <div className="code-block">
                <pre>{guideContents[selectedPlatform].code}</pre>
                <button
                  className="copy-btn"
                  onClick={handleCopy}
                  title="Copy to clipboard"
                >
                  <img
                    src="/assets/icons/Copy.svg"
                    alt="Copy"
                    className="copy-icon-image"
                  />
                </button>
                {copied && <span className="copy-notification">Copied!</span>}
              </div>

              <ol
                start={
                  (guideContents[selectedPlatform].beforeCodeSteps?.length ||
                    0) + 1
                }
              >
                {guideContents[selectedPlatform].afterCodeSteps?.map(
                  (step, idx) => (
                    <li key={`after-${idx}`}>{step}</li>
                  )
                )}
              </ol>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Guide;
