import {
    faUserPlus,
    faCopy,
    faPen,
    faTrashAlt,
    faPlusSquare,
    faUserCircle,
 } from "@fortawesome/free-solid-svg-icons"

 import { IconDefinition } from "@fortawesome/free-solid-svg-icons"

 export type Properties = {
    icon?: IconDefinition,
    title: string
    style?: object
    submenu?: Properties[]
    action?: Function | null
 }

 export const testAlert = () => {
    alert(`Test function.`)
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
                        action: testAlert,
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
                action: testAlert,
            },
            {
                icon: faTrashAlt,
                title: 'Delete workspace',
                style: {
                    color: 'red',
                },
            },
        ],
        action: null,
    },
]