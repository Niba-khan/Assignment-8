export default function Hero() {
    return (
      <div className="relative w-full">
      
        <video
          className="absolute top-0 left-0 w-full h-[45rem] object-cover"
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
  
        <div className="relative z-10 flex flex-col items-center justify-center h-[45rem] text-white">
          <h1 className="font-[700] text-6xl md:text-5xl leading-[28px] md:leading-[32px] text-center p-9 ">
           EXPLORE.DREAM.DISCOVERE
          </h1>
          <p className="text-center font-[400] text-white ">This is a world travel blog featuring Beautifull Destination, new Experinces, and hidden places around the globe.<br/>Please Along</p>

          <button className="w-[150px] sm:w-[180px] md:w-[221px] h-[50px] sm:h-[55px] md:h-[62px] border-4 border-white hover:bg-green-700  transition duration-300 flex items-center justify-center mt-4">
          <h3 className="text-[14px] sm:text-[16px] md:text-[20px] font-[700] text-[#FFFFFF] leading-none">
            SHOP NOW
          </h3>
        </button>
        </div>
  
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
      </div>
    );
  }
  