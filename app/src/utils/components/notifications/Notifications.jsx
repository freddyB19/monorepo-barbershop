import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'

const SUCCESS = "success"
const DANGER = "danger"
const INFO = "info"
const WARNING = "warning"

const POSITION_TOP_START = "top-start"
const POSITION_TOP_CENTER = "top-center"
const POSITION_TOP_END = "top-end"
const POSITION_MIDDLE_START = "middle-start"
const POSITION_MIDDLE_CENTER = "middle-center"
const POSITION_MIDDLE_END = "middle-end"
const POSITION_BOTTOM_START = "bottom-start"
const POSITION_BOTTOM_CENTER = "bottom-center"
const POSITION_BOTTOM_END = "bottom-end"


export const Notification = ({handleState, showState, position=POSITION_TOP_CENTER, type=SUCCESS, message="Mmm..."}) => {
  const typeNoti = {
    success: SUCCESS,
    error: DANGER,
    info: INFO,
    warning: WARNING
  }

  const positionNoti = {
    ts:POSITION_TOP_START,
    tc:POSITION_TOP_CENTER,
    te:POSITION_TOP_END,
    ms:POSITION_MIDDLE_START,
    mc:POSITION_MIDDLE_CENTER,
    me:POSITION_MIDDLE_END,
    bs:POSITION_BOTTOM_START,
    bc:POSITION_BOTTOM_CENTER,
    be:POSITION_BOTTOM_END
  }



  const optionType =  typeNoti[type] ? typeNoti[type] : INFO
  const optionPosition =  positionNoti[position] ? positionNoti[position] : POSITION_TOP_CENTER
    ? positionNoti[position] 
    : POSITION_TOP_CENTER

  return (
    <ToastContainer
          className="p-3"
          position={optionPosition}
        >
          <Toast
            bg={optionType}  
            onClose={handleState} 
            show={showState} 
            delay={3200} 
            autohide
          >
            <Toast.Header closeButton={false}>
              <strong className="me-auto">¡¡Notificación!!</strong>
            </Toast.Header>
            <Toast.Body className="text-white">
              {message} 
            </Toast.Body>
          </Toast>
        </ToastContainer>

  )
}


