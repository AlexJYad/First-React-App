function Footer() {

    const copyright = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }

    return (
        <div className="copyright" style={copyright}>
            <p>Made with love by Myself</p>
        </div>
    );
};

export default Footer;