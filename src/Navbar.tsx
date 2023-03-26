import React, {useState} from "react";
import styled from "styled-components";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";


type NavbarProps = {
    brand: {
        name: string;
        href: string;
    };
    links : { 
        name: string;
        href: string;
    }[];
      
    // icons: {
    //     map(arg0: (icon: any, index: any) => JSX.Element): React.ReactNode;
    //     src: string;
    //     link: string;
    // } | null;
}

const NavBarBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    background-image: linear-gradient(0deg, #2c92fe 0%, #66a2fc 50%);
    width: 100%;
    top: 0;
    position: fixed;
    z-index: 100;
    height: 7.5vh;
    `;

const Brand = styled.a`

    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    text-decoration: none;
`;

const Link = styled.a`
    margin: 0 10px;
    font-weight: 300;
    font-size: 1.3rem;
    color: white;
    text-decoration: none;
    a:hover, a:focus {
      color: #b1d8fe;
    };
`;

const Icon = styled.a`
    maring-left: 10px;
`;
    



const Navbar: React.FC<NavbarProps> = ({brand, links}) => {
    const [acitve, setActive] = useState(false);
    const [activeLink, setActiveLink] = useState(0);

    const handleClick = (index: number) => {
        setActiveLink(index);
    }

    // <div>
    // <Navbar.Brand className="tab" href="#intro">
    //   Jan-Yaeger Dhillon
    // </Navbar.Brand>
    // <Navbar.Toggle aria-controls="basic-navbar-nav" />
    // <Navbar.Collapse id="basic-navbar-nav">
    //   <Nav className="me-auto">
    //     <Nav.Link className="tab" href="#skills">
    //       Skills
    //     </Nav.Link>
    //     <Nav.Link className="tab" href="#projects-anchor">
    //       Projects
    //     </Nav.Link>
    //     <Nav.Link className="tab" href="#eeSection">
    //       Education and Experience
    //     </Nav.Link>
    //   </Nav>
    // </Navbar.Collapse> */}

    return (
        <NavBarBody>
            <Brand href={brand.href}>{brand.name}</Brand>
            {links.map((link, index) => (
                <Link key={index} href={link.href}>
                    {link.name}
                </Link>
            ))}
            <span>
            <Icon href="https://www.github.com/jansdhillon" target={"_blank"}>
              <img
                src={github}
                className="icon"
                alt="GitHub"
                width="50"
                height="50"
              />
            </Icon>
            <Icon href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/" target={"_blank"}>
              <img
                src={linkedin}
                className="icon"
                alt="LinkedIn"
                width="50"
                height="50"
              />
            </Icon>
          </span>

        </NavBarBody>
    );


};

export default Navbar;