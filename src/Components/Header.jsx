
const links = [
    {
        id: 1,
        text: "CHARACTERS",
        url: "#",
    },
    {
        id: 2,
        text: "COMICS",
        url: "#",
    },
    {
        id: 3,
        text: "MOVIES",
        url: "#",
    },
    {
        id: 4,
        text: "TV",
        url: "#",
    },
    {
        id: 5,
        text: "GAMES",
        url: "#",
    },
    {
        id: 6,
        text: "VIDEOS",
        url: "#",
    },
]




function Header() {

    return (
        <header>
            <div className="flex-container">
                <img id="header-logo" src="/dc-logo.png" alt="logo dc" />
                <nav className="navbar">
                    <ul>
                        {
                            links.map((link,i) => {
                               return <li key={i}> {link.text}</li>

                            })
                            

                        }
                        
                        
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;