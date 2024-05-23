import { Handle, Position } from 'reactflow'
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineChat } from "react-icons/md";

const HomePage = ({ data }) => {
 

  return (
    <div style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",}}>
      <div
        style={{
          backgroundColor: '#FBEAEB',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          fontWeight: 'bold',
          color: 'black',
          paddingLeft: 15,
          paddingTop: 3,
          paddingBottom: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 275,

        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 13, paddingRight: 7, paddingTop: 5 }}
          >
            <MdOutlineChat height={15}/>
          </span>
          {data.heading}
        </div>
        <div style={{ paddingRight: 15 }}>
          <ImWhatsapp height={15} />
        </div>
      </div>
      <div
        style={{
          padding: 15,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            color: 'black',
            maxWidth: '250px',
           wordBreak: 'break-all',
          }}
        >
          {data.label}
        </div>
      </div>
      <Handle type="source" position={Position.Right} id="source" />
      <Handle type="target" position={Position.Left} id="target" />
    </div>
  )
}

export default HomePage