import React from 'react'
import { Collapse , Typography , Button} from 'antd'
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';
import { AppContext } from '../../Context/AppProvider';

const {Panel} = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }
    .ant-collapse-content-box {
      padding: 0 40px;
    }
    .add-room {
      color: white;
      padding: 0;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;

const RoomList = () => {

    const {rooms , setIsAddRoomVisible , setSelectedRoomId} = React.useContext(AppContext)
    const handleAddRoom = () => {
      setIsAddRoomVisible(true)
    }
    return (
        <Collapse ghost defaultActiveKey={["1"]}>
            <PanelStyled header="Danh Sách các phòng" key="1">
              {rooms.map((room) => (
                <LinkStyled key={room.id} 
                  onClick={() => setSelectedRoomId(room.id)}
                >{room.name}</LinkStyled>
              ))}
                <Button 
                    type="text" 
                    icon={<PlusSquareOutlined />}
                    onClick={handleAddRoom}
                    className="add-room">
                        Thêm Phòng
                </Button>
            </PanelStyled>
        </Collapse>
    )
}

export default RoomList

