import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className='navHeading'>Header</div>

            <div className="logoNameCntnr">
                {/* <a href="">
                    <img src="" alt="" />
                </a> */}
                <span className='logoName'>
                    Vite Counter App
                </span>
            </div>

        </>
    )
}

export default Header