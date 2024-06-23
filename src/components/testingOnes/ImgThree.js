function ImgThree() {
   const randomImgUrl = "https://picsum.photos/400/265";
   return (
      <div>
         <h5>Random Img</h5>
         <img
            height={200}
            src={randomImgUrl}
            alt="Magic reminiscent of flashes of either black flame, or splashes of ink flowing in the air"
         />
      </div>
   );
}

export default ImgThree;
