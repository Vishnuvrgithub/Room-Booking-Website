import React from 'react'
const Box = ({data,inorout}) => {

  const formatDate = (date)=>{
    return (new Date(date)).toDateString();
  }
  return (
    <div className='chkbox'>
    <div className='people'>
        <div className='names'>{data.guestFirstName}</div>
        <div>{formatDate(data.checkOutDate)}</div>
        <div>{formatDate(data.checkInDate)}</div>
        
    </div>
    <div>{data.room.roomNumber}</div>
    <div></div>

    {/* <Button text={text} /> */}
    <div className='inorout'>{data.status}</div>
   
</div>



  )
}


export default Box