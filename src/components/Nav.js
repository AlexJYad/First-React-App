function Nav() {
    const mainNav = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
    }
    const ul = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        listStyleType: "none",
    }

    const li = {
        paddingLeft: "10%",
        paddingRight: "10%",
    }

    return (
        <nav className="main-nav" style={mainNav}>
            <ul style={ul}>
                <li style={li}>Home</li>
                <li style={li}>Articles</li>
                <li style={li}>About</li>
                <li style={li}>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;