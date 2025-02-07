import { useNavigate, useLocation } from "react-router";
import "../styles/header.css";

function Header() {
    const n = "{FCA}";
    const navigate = useNavigate();
    const location = useLocation();

    const links = [
        { path: "/", label: "Home" },
        { path: "/ourGoal", label: "Our Goal" },
        { path: "/howItWorks", label: "How it works" },
        { path: "/become-tutor", label: "Become Tutor" },
        { path: "/questions-answer", label: "Questions" }
    ];

    return (
        <div className="header">
            <h1 onClick={() => navigate("/")}>{n}</h1>

            <div className="nav">
                {links.map((link) => (
                    <p
                        key={link.path}
                        onClick={() => navigate(link.path)}
                        className={location.pathname === link.path ? "active-link" : ""}
                    >
                        {link.label}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default Header;
