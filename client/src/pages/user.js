import React from 'react'
import Footer from '../componement/main_footer'
import Mainheader from '../componement/main_header'
import UserList from '../componement/userManagement/Users'
function user() {
  return (
    <>
    <Mainheader />
    {/* Body section */}
    <UserList/>
    <Footer />
</>
  )
}

export default user