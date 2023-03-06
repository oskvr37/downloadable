import { useState, ChangeEvent, useEffect } from "react";

function downloadStreamableVideo(video_id: string) {
  console.debug(`[Downloadable] Attempting to download ${video_id}`);
  const url = `https://ajax.streamable.com/videos/${video_id}/download`;
  window.open(url, "_blank");
}

export default function Download() {
  const [url, setUrl] = useState("");
  const [isValid, setValid] = useState(true);

  useEffect(() => {
    if (url && isValid) {
      const video_id = url.slice(-6);
      downloadStreamableVideo(video_id);
      setUrl("");
      setValid(true);
    }
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);

    // Check if input value is a valid Streamable URL
    const regex = /^https:\/\/streamable\.com\/[a-z0-9]{6}$/;
    setValid(regex.test(value));
  };

  return (
    <input
      type="url"
      placeholder="https://streamable.com/abcdef"
      value={url}
      onChange={handleInputChange}
      className={isValid ? "" : "invalid"}
    ></input>
  );
}
