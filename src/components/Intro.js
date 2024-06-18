function Intro(props) {
    return (
        <div className="blog-post-intro">
            <h2>{props.tit}</h2>
            <div>
                <p>{props.po}</p>
            </div>
        </div>
    );
};

export default Intro;