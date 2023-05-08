import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MenuApis } from './Component/Pages/MenuList/MenuApi';
import { Navbar } from 'react-bootstrap';
import MenuCard from './Component/Pages/MenuList/MenuCard';

function MyMenu() {

    const [menus, setMenus] = useState([]);

    async function getData() {
        const data = await MenuApis.getAll();
        setMenus(data);
    }

    useEffect(() => {
        getData();
    }, [])

  return (
    <>
        {/* <Navbar/> */}
        <Button onClick={() => console.log(menus)}>Clicl me</Button>
    </>
    // {menus.length ? menus.map((m) => {
    //     return (
    //         <MenuCard />
    //     )
    // }) : ''}
  );
}

export default MyMenu;