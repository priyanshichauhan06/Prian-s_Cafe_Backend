import React from "react";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuCard from "./MenuCard";
import { MenuApis } from "./MenuApi";
import './Menu.css';

function ViewMenu() {
    const [menus, setMenus] = useState([]);
    async function getData() {
        const data = await MenuApis.getAll();
        setMenus(data);
    }
    useEffect(() => {
            getData();
    }, []);
    
    return (
        <div id="main">
            <React.Fragment>                
            {/* <NavBarComp/> */}
            <h1 className="text-center">Enjoy our Menu</h1>
            <br />
            <Container>    
                <Row>    
                    {menus.length !== 0 ? menus.map((m:any) => 
                        <Col sm>    
                            <MenuCard menuName={m.menuName} menuImage={m.menuImage} menuDescription={m.menuDescription} menuId={m.menuId}/>    
                        </Col> 
                    )  : null
                    }    
                </Row>    
            </Container>
        </React.Fragment>
        </div>
        
    )
}

export default ViewMenu;