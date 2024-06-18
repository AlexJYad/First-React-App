function Promo() {
    const heading = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    const str = "This is my first React app";
    return (
        <div style={heading}>
            {Math.random() >= 0.5 ? <h1 style={{color:"brown"}}>{str}</h1> : <h1 style={{color:"DarkCyan"}}>{str}</h1>}
            <h3>Here's a random number from 0 to 10: <span style={{color:"DarkOliveGreen"}}>{ Math.floor(Math.random() * 10) + 1 }</span>!
              </h3>
        </div>
    );
};

export default Promo;