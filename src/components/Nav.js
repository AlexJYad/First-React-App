import { useState } from 'react'; 


function Nav(props) {

    const [active, setActive] = useState(props.isActive); 

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

    let className1 = 'menu';
    let className2 = 'menu';
    let className3 = 'menu';
    let className4 = 'menu';

    switch (active) {
        case 1:
            className1 += ' menu-active';
            break;
        case 2:
            className2 += ' menu-active';
            break;
        case 3:
            className3 += ' menu-active';
            break;
        case 4:
            className4 += ' menu-active';
            break;
        default:
            break;
    }

    return (
        <nav className="main-nav" style={mainNav}>
            <ul style={ul}>
                <li className={className1} onClick={() => setActive(1)} style={li}>Home</li>
                <li className={className2} onClick={() => setActive(2)} style={li}>Articles</li>
                <li className={className3} onClick={() => setActive(3)} style={li}>About</li>
                <li className={className4} onClick={() => setActive(4)} style={li}>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;