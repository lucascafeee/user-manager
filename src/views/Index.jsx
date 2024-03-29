//Index.js
import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../style/sideBarStyle.css';
import logo from '../assets/icon-center.png';
import RoundUps from './Clients.jsx';

function Index() {
    const [currentScreen, setCurrentScreen] = useState('Clientes');

    const handleMenuClick = (screen) => {
        setCurrentScreen(screen);
    };


    const renderScreen = () => {
        switch (currentScreen) {
            case 'Clientes':
                return <RoundUps />;
            default:
                return <h1>Tela não encontrada</h1>;
        }
    };

    return (
        <div className="container">
            <Sidebar className="sidebar">
                <div className="sidebar-logo">
                    <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
                </div>
                <Menu className="menu">
                    <SubMenu label="Pessoas">
                        <MenuItem className="menu-item" onClick={() => handleMenuClick('Clientes')}>Clientes</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar>
            <div className="main-content">
                {renderScreen()}
            </div>
        </div>
    );
}

export default Index;
