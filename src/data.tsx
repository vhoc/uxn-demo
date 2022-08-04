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

export interface TtableRows {
    id: number
    projectName: string
    scoreCards: number
    assetsType: [number, string]
    lastUpdate: string
    createdBy: string
}
export const tableData: TtableRows[] = [
    {
        id: 1,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 2,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 3,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 4,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 5,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 6,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 7,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 8,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 9,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    },
    {
        id: 10,
        projectName: 'Compliance 2016-2021',
        scoreCards: 12,
        assetsType: [5,'json'],
        lastUpdate: 'June 20, 2020',
        createdBy: 'Ben Swanson',
    }
]

export interface TtableColumns {
    label: string
    [accessor: string]: string
}
export const tableColumns: TtableColumns[] =  [
    {
        label: 'Project Name',
        accessor: 'projectName',
    },
    {
        label: 'Scorecards',
        accessor: 'scoreCards',
    },
    {
        label: 'Assets/Type',
        accessor: 'assetsType',
    },
    {
        label: 'Last Update',
        accessor: 'lastUpdate',
    },
    {
        label: 'Created By',
        accessor: 'createdBy',
    },
]