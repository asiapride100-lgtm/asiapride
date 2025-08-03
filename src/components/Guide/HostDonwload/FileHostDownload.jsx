import React from "react";
import "./index.css";

const HostsDownloadButton = () => {
  const AsiaTestText = `202.10.42.93 growtopia1.com
202.10.42.93 growtopia2.com
202.10.42.93 www.growtopia1.com
202.10.42.93 www.growtopia2.com
202.10.42.93 RvLnd.here`;

  const handleDownload = () => {
    const blob = new Blob([AsiaTestText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AsiaTest.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleDownload}
      className="hosts-download-btn"
      title="Download Hosts File"
      type="button"
    >
      <img
        src="/assets/icons/File.svg"
        alt="Hosts File"
        className="file-icon"
      />
      Hosts File
    </button>
  );
};

export default HostsDownloadButton;
