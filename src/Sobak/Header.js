import React from 'react';
import './testgrid.css';
const Header = () => {
    return (<div className='Header'>
            <div className='DT'>Dogtime</div>
            <div className='HDD'>
                <tr>
                <td>Home</td>
                <td>Dog Food</td>
                <td> Dog Health</td>
                <td>Pattern</td>
                </tr>
            </div>
            <div className='DS'>Dog Sense</div>

        </div>
)
}
export default Header;