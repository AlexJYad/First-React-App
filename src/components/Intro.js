function Intro(props) {
    const blog = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0px",
        width: "calc(calc(100% / 3) - 62px)",
    }
    return (
        <div className="blog-post-intro" style={blog}>
            <h2>{props.tit}</h2>
            <div>
                <p>{props.po}</p>
            </div>
        </div>
    );
};

export default Intro;