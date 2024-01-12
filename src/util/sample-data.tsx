import { IconProp } from "@fortawesome/fontawesome-svg-core"
import React from "react"
// import { UserPicture } from "../components/elements/UserPicture"
import {
    faEllipsisV
 } from "@fortawesome/free-solid-svg-icons"
 
 export const testAlert = () => {
    alert(`Test function.`)
 }

export interface IDropDownItem {
    icon?: IconProp
    title: string | JSX.Element
    style?: object
    submenu?: IDropDownItem[]
    action?: React.MouseEventHandler<HTMLDivElement> | undefined
    isSectionLabel?: boolean | undefined
 }

 export const menuItems: IDropDownItem[] = [
    {
        //icon: faUserCircle,
        title: `Sign In`,
        submenu: [
            {
                title: 'Option 1',
            },
            {
                title: 'option 2',
                action: () => console.log('Action triggered!'),
            },
            {
                title: 'option 3',
            },
            
        ],
        action: undefined,
    },
]

export const menu2Items: IDropDownItem[] = [
    {
        icon: faEllipsisV,
        title: '',
        submenu: [
            {
                title: 'Option 1',
            },
            {
                title: 'Option 2',
                action: () => alert('Action example'),
            },
            {
                title: 'Option 3',
            },
        ]
    }
]

// export const menu3Items: IDropDownItem[] = [
//     {
//         title: <UserPicture src={'https://phantom-elmundo.unidadeditorial.es/563c943e505bf5132d7f6d676c08bfd0/crop/0x0/3000x2000/resize/473/f/webp/assets/multimedia/imagenes/2021/09/22/16323254074650.jpg'} width={32}/>,
//         submenu: [
//             {
//                 title: 'Option 1',
//             },
//             {
//                 title: 'Option 2',
//                 action: () => alert('Action example'),
//             },
//             {
//                 title: 'Option 3',
//             },
//         ]
//     }
// ]

export const menu4Items: IDropDownItem[] = [
  {
    title: 'Sign In',
    action: () => alert(`Single item button`)
  }
]

export const menu5Items: IDropDownItem[] = [
  {
      icon: faEllipsisV,
      title: 'Dropdown with icon',
      submenu: [
          {
              title: 'Option 1',
          },
          {
              title: 'Option 2',
              action: () => alert('Action example'),
          },
          {
              title: 'Option 3',
          },
      ]
  }
]

export const menu6items: IDropDownItem[] = [
  {
      title: 'Organization',
      isSectionLabel: true,
  },
  {
      title: 'Coke',
      style: {
        fontWeight: 'bold',
        marginBottom: '10px',
      },
      submenu: [
        {
          title: 'American Eagle',
        },
        {
          title: 'American Express',
        },
        {
          title: 'Coke',
        }
      ]
  },
  {
      title: 'Copy GCP derived ID',
  },
  {
      title: 'Copy Azure derived ID',
  },
  {
      title: 'Account Settings',
  },
  {
      title: 'Option',
  },
  {
      title: 'Option',
  },
]

  
export const action = (e: any) => {
  console.log("Action for", e.target.id, "action");
};

export const _littleData = [
  [
    {
      id: "11",
      value: "1",
      label: "Adam Smith",
      description: "asmith@company.com",
      type: 'USER',
      route: ["21", "31", "33", "42", "44", "45", "49"],
      actions: [
        { id: "print-action", label: "More details", onClick: action },
        { id: "print-action-2", label: "Another print details", onClick: action, },
        { id: "print-action-3", label: "Some more details", onClick: action},
      ]
    },
    {
      id: "12",
      value: "2",
      label: "Andrew Jackson",
      description: "andrew@company.com",
      type: 'SERVICEACCOUNT',
      route: ["21", "32", "42", "43", "47"],
      actions: [
        { id: "print-action", label: "More details", onClick: action },
        { id: "print-action-2", label: "Another print details", onClick: action, },
        { id: "print-action-3", label: "Some more details", onClick: action},
      ]
    },
  ]
]

export const _data = [
  [
    {
      id: "11",
      value: "1",
      label: "Adam Smith",
      description: "asmith@company.com",
      type: "USER",
      route: ["21", "31", "33", "42", "44", "45", "49"],
      actions: [
        {
          id: "print-action-2",
          label: "Another print details",
          onClick: action,
        },
        {
          id: "instance-action",
          label: "Some instance action",
          onClick: action,
        },
        {
          id: "instance-action",
          label: "Action 1",
          onClick: action,
        },
      ],
    },
    {
      id: "12",
      value: "2",
      label: "Alice O'Connor",
      description: "aoconnor@company.com",
      type: "USER",
      route: ["21", "32", "42", "43", "47"],
    },
    {
      id: "13",
      value: "3",
      label: "August Hayek",
      description: "ahayek@company.com",
      type: "USER",
      route: ["21", "34", "41", "45", "46", "48"],
      actions: [
        {
          id: "print-action-2",
          label: "Another print details",
          onClick: action,
        },
        {
          id: "instance-action",
          label: "Some instance action",
          onClick: action,
        },
        {
          id: "instance-action",
          label: "Action 3",
          onClick: action,
        },
      ],
    },
  ],
  [
    {
      id: "21",
      value: "1",
      label: "Finance",
      type: "USERGROUPS",
      description: "Finance Department",
      actions: [
        {
          id: "policy-action",
          label: "Some policy action",
          onClick: action,
        },
      ],
    },
  ],
  [
    {
      id: "31",
      value: "1",
      type: "SERVICEACCOUNT",
      label: "AdministratorAccess",
      collapsible: false,
    },
    {
      id: "32",
      value: "2",
      type: "SERVICEACCOUNT",
      label: "ManagementAccess",
      actions: [
        {
          id: "user-action",
          label: "Some user action",
          onClick: action
        },
        {
          id: "role-action",
          label: "Some role action",
          onClick: action
        },
      ],
    },
    {
      id: "33",
      value: "3",
      type: "SERVICEACCOUNT",
      label: "SupervisionAccess",
      actions: [
        {
          id: "user-action",
          label: "Some user action",
          onClick: action
        },
        {
          id: "role-action",
          label: "Some role action",
          onClick: action
        },
      ],
    },
    
    {
      id: "37",
      value: "7",
      type: "SERVICEACCOUNT",
      label: "UserAccess",
      actions: [
        {
          id: "user-action",
          label: "Some user action",
          onClick: action
        },
        {
          id: "role-action",
          label: "Some role action",
          onClick: action
        },
      ],
    },
    {
      id: "38",
      value: "8",
      type: "SERVICEACCOUNT",
      label: "PublicAccess",
      actions: [
        {
          id: "user-action",
          label: "Some user action",
          onClick: action
        },
        {
          id: "role-action",
          label: "Some role action",
          onClick: action
        },
      ],
    },
  ],
  
];

  export const littleConnections = [
    { startID: "11", endID: "12", dashness: true, showTail: true, },
  ]
  
  export const connections = [
    { startID: "11", endID: "21", dashness: true, showTail: true, },
    { startID: "12", endID: "21", showTail: true, },
    { startID: "13", endID: "21", showHead: true },
    { startID: "21", endID: "31", showHead: true, showTail: true, dashness: true },
    { startID: "21", endID: "32" },
    { startID: "21", endID: "33" },
    { startID: "21", endID: "37" },
    { startID: "21", endID: "38" },
    // { startID: "31", endID: "49", dashness: true, },
    // { startID: "32", endID: "42" },
    // { startID: "32", endID: "43" },
    // { startID: "32", endID: "47" },
    // { startID: "33", endID: "44", dashness: true, },
    // { startID: "33", endID: "45", dashness: true, },
    // { startID: "34", endID: "41", dashness: true, },
    // { startID: "34", endID: "45" },
    // { startID: "34", endID: "46" },
    // { startID: "34", endID: "48" },
  ];