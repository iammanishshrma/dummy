import React, { useState } from 'react';

import Link from 'next/link';

import './NavBar.scss';

const NavigationBar = (props) => {
    const [showMenu, setShowMenu] = useState('');

    const navData = [
        {
            heading: 'Brands',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Transmission: [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Cooling & Heating': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Exterior',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Interior',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Bike Accesssories',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Transmission: [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Cooling & Heating': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Auto Detailing',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Riding Gear',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Repair',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'Tools & Garage',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
        {
            heading: 'More',
            data: {
                'Service Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Major Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                Brakes: [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Engine Parts', 'Suspension & Steering', 'Brakes', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Engine Parts': [
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Brake Hydraulics',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
                'Suspension & Steering': [
                    {
                        subHeading: 'Brake Friction',
                        subData: ['Service Parts', 'Brakes', 'Engine Parts', 'Suspension & Steering', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                    {
                        subHeading: 'Regular Service',
                        subData: ['Brakes', 'Engine Parts', 'Suspension & Steering', 'Service Parts', 'Lubricants & Fluids', 'Body & Exhaust'],
                    },
                ],
            },
        },
    ];
    const [menuHolder, setMenuHolder] = useState('Service Parts');
    const handleMenuOption = (heading) => {
        if (showMenu === heading) {
            setShowMenu('');
        } else {
            setShowMenu(heading);
        }
        props.onGameItemClick;
    };

    return (
        <>
            <nav className="navigation-links">
                <ul className="navigation">
                    {navData.map((item, index) => {
                        return (
                            <li key={index} onMouseLeave={() => handleMenuOption()}>
                                <Link
                                    onClick={() => handleMenuOption(item.heading)}
                                    onMouseEnter={() => handleMenuOption(item.heading)}
                                    href=""
                                    className={showMenu === item.heading ? 'active' : ''}
                                >
                                    {item.heading}
                                    <span className="arrow">
                                        <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.25 1.5L6.25 6.5L11.25 1.5"
                                                stroke="#111E6C"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                                {showMenu === item.heading ? (
                                    <div className="megamenu-wrap">
                                        <ul className="ltl-menu">
                                            {Object.keys(item.data).map((element, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link
                                                            onClick={props.onGameItemClick}
                                                            onMouseEnter={() => setMenuHolder(element)}
                                                            href="/product-listing"
                                                        >
                                                            {element}
                                                            <span className="arrow">
                                                                <svg
                                                                    width="13"
                                                                    height="8"
                                                                    viewBox="0 0 13 8"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M1.25 1.5L6.25 6.5L11.25 1.5"
                                                                        stroke="#111E6C"
                                                                        strokeWidth="2"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                    />
                                                                </svg>
                                                            </span>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                        {menuHolder && (
                                            <div className="rtl-menu">
                                                {item.data?.[menuHolder]?.map((value, index) => {
                                                    return (
                                                        <div key={index} className="rtl-menu-wrap">
                                                            <h4>{value.subHeading}</h4>
                                                            <ul>
                                                                {value.subData.map((item, index) => {
                                                                    return (
                                                                        <li key={index}>
                                                                            <span className="arrow">
                                                                                <svg
                                                                                    width="13"
                                                                                    height="8"
                                                                                    viewBox="0 0 13 8"
                                                                                    fill="none"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                >
                                                                                    <path
                                                                                        d="M1.25 1.5L6.25 6.5L11.25 1.5"
                                                                                        stroke="#111E6C"
                                                                                        strokeWidth="2"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                    />
                                                                                </svg>
                                                                            </span>
                                                                            <Link href="/">{item}</Link>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                ) : null}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};
export default NavigationBar;
