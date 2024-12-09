import { Menu } from "antd";
import React from "react";
import Link from "next/link";

function AppSideMenu() {
    const menuItems = [
        {label:<Link href="/" className="link-menu">Acceuil</Link>,key:1},
        {label:<Link href="/recruteur" className="link-menu">Recruteur</Link>,key:2},
    ]; 

    return (
        <Menu mode="inline" items={menuItems}></Menu>
    )
}

export default AppSideMenu;