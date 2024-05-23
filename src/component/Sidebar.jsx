import React, { useEffect, useState } from 'react'
import { BiSolidMessageSquareAdd } from "react-icons/bi";

const Sidebar = () => {
    const [showUsage, setShowUsage] = useState(true) 

    
    useEffect(() => {
      setTimeout(() => {
        setShowUsage(false)
      }, 5000)
    }, [showUsage])
  
    // display show node usage information on first load of the application
    const displayUsage = showUsage ? '' : 'none'
  
    const onDragStart = (event, nodeType) => {
      event.dataTransfer.setData('application/reactflow', nodeType)
      event.dataTransfer.effectAllowed = 'move'
    }
  
  return (
    <div className='sidebar'>
      <div className="description" style={{ display: displayUsage }}>
        Drag below node to the pane on the left to add new nodes.
      </div>
      <aside>
        <div
          className="appnode"
          onDragStart={(event) => onDragStart(event, 'default')}
          draggable
        >
          <span
            className="material-symbols-outlined"
            style={{ paddingBottom: 2 }}
          >
          <BiSolidMessageSquareAdd style={{fontSize:"20px"}}/>
          </span>
          Message
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
