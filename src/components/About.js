function About() {
   const heading = {
      padding: "20px",
      border: "1px solid gray",
      background: "#fff",
      margin: "20px 0",
   };
   const str = "Some text about me";
   return (
      <div style={heading}>
         <h1>{str}</h1>
      </div>
   );
}

export default About;
