import ReactPlayer from "react-player/youtube";

const YouTube = () => {
   return (
      <div style={{ background: "black" }}>
         <ReactPlayer
            url="https://www.youtube.com/watch?v=u2jLHdpo2AQ"
            height={250}
            width="100%"
            playing={false}
            volume={0.1}
         />
      </div>
   );
};

export default YouTube;
