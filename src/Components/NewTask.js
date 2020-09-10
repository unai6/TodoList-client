import React from 'react'
import SideBar from './SideBar';

export const NewTask = () => {
    return (
        <div>
            <h3>Create new task</h3>
            <SideBar data-test='sidebar-component'/>
        </div>
    )
}
