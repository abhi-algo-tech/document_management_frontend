import React, { useState } from "react";
import "./_copyCard.scss";

interface CopyCardProps {
  content: string;
}

const CopyCard: React.FC<CopyCardProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="copy-card">
      <div className="copy-card-content">{content}</div>
      {/* <code dangerouslySetInnerHTML={{ __html: content }} /> */}
      <button className="copy-button" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default CopyCard;
