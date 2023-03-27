import React, {useState} from "react";
import styled from "styled-components";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";


type Link = {
    name: string;
    href: string;
}


type NavbarProps = {
    links: Link[];
    brand: Link;
    icons: Link[];
      
    // icons: {
    //     map(arg0: (icon: any, index: any) => JSX.Element): React.ReactNode;
    //     src: string;
    //     link: string;
    // } | null;
}

const NavBarBody = styled.div`
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(0deg, #2c92fe 0%, #66a2fc 50%);
    z-index: 100;
    `;

const Brand = styled.a`
    display: flex;
    align-items: center;
    content-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    color: white;
    margin-right: 10px;
    text-decoration: none;
    margin-bottom: 5px;

`;

const Link = styled.a`
    display: flex;
    margin: 0 1rem;
    align-items: center;
    content-align: center;
    font-weight: 300;
    font-size: 1.3rem;
    color: white;
    text-decoration: none;
    &:hover {
        color: #b1d8fe;
      };
    font-weight: 400;
`;

const Icon = styled.a`
    align-
`;

const IconImage = styled.img`
    width: 30px;
    margin: 10px;
    padding: 10px;
`;
    



const Navbar: React.FC<NavbarProps> = ({brand, links, icons}) => {

    return (
        <NavBarBody>
            <Brand href={brand.href}>{brand.name}</Brand>
            {links.map((link, index) => (
                <Link key={index} href={link.href}>
                    {link.name}
                </Link>
            ))}
            <span>
                <>
                {icons.map((icon, index) => {
                    <Icon href={icon.href} target={"_blank"}>
                        <IconImage
                            src={icon.href}
                            className="icon"
                            alt={icon.name}
                        />
                    </Icon>
                })}
                </>
            <Icon href="https://www.github.com/jansdhillon" target={"_blank"}>
              <IconImage
                src={github}
                className="icon"
                alt="GitHub"
              />
            </Icon>
            <Icon href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/" target={"_blank"}>
              <IconImage
                src={linkedin}
                className="icon"
                alt="LinkedIn"
              />
            </Icon>
          </span>

        </NavBarBody>
    );


};

export default Navbar;