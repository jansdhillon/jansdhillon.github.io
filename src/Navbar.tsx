import React, {useState} from "react";
import styled from "styled-components";



type Link = {
    name: string;
    href: string;
    src?: string;
}


type NavbarProps = {
    links: Link[];
    brand: Link;
    icons: Link[];
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
    align-content: center;
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
            <>
            {icons.map((icon, index) => {
                return (
                    <Icon href={icon.href} target={"_blank"} key={index}>
                        <IconImage src={icon.src} className="icon" alt={icon.name}/>
                    </Icon>
                );
                })}
            </>

        </NavBarBody>
    );


};

export default Navbar;