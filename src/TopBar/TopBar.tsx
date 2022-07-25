import React from 'react'
import { DropDown } from '../DropDown/DropDown'
// Test Data
import { menuItems, Properties } from '../data'

export const TopBar = (): JSX.Element => {

    const depthLevel = 0

  return (
    <div className='nav-area'>
        <nav>
            <ul className='menus'>
            {
                menuItems.length >= 1 ? (
                    menuItems.map((menu: Properties, index: number) => {
                        return (
                            <DropDown variant={'primary'} items={menu} key={index} depthLevel={depthLevel}/>
                        )
                    })
                ) : (
                    `Sin elementos`
                )
                
            }
            </ul>
        </nav>
    </div>
  )
}
