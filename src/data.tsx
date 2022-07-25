import {
    faUserPlus,
    faCopy,
    faPen,
    faTrashAlt,
    faPlusSquare,
    faUserCircle
 } from "@fortawesome/free-solid-svg-icons"

 export interface Properties {
    icon?: any,
    title: String
    style?: Object
    submenu?: Properties[]
 }

export const menuItems: Properties[] = [
    {
        icon: faUserCircle,
        title: `Wilson McMiller's Workspace`,
        submenu: [
            {
                icon: faUserPlus,
                title: 'Invite team member',
            },
            {
                icon: faCopy,
                title: 'Switch workspace',
                submenu: [
                    {
                        icon: faUserCircle,
                        title: `Wilson McMiller's Workspace`,
                    },
                    {
                        icon: faUserCircle,
                        title: `Development Environment`,
                    },
                    {
                        icon: faPlusSquare,
                        title: `Add Workspace`,
                        style: {
                            color: `#1890ff`
                        },
                    },

                ]
            },
            {
                icon: faPen,
                title: 'Edit workspace',
            },
            {
                icon: faTrashAlt,
                title: 'Delete workspace',
                style: {
                    color: 'red',
                },
            },
        ]
    },
]