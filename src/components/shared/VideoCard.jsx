import React from 'react';

const VideoCard = ({ src, poster, title, name, quote, tall = false }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg w-full ${
        tall ? 'md:row-span-2 md:h-[440px] h-[380px]' : 'aspect-[3/4]'
      }`}
    >
      {/* Video */}
      <video
        className="w-full h-full object-cover"
        poster={poster}
        controls
        preload="none"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Bottom Overlay Info */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-white">
        {quote ? (
          <p className="text-sm italic leading-snug">
            “{quote}”
            <br />
            <span className="text-xs font-light">– {name}</span>
          </p>
        ) : (
          <>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs">{name}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
