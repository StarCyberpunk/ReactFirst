import React from 'react';
import './Middle.css';

const Middel = () => {
    return (<div className='Middel-wraper'>
            <div className='Header'>
                <div className='Dogtime'>Dogtime</div>
                <tr className='HD'>
                    <td>Home</td>
                    <td>Dog Food</td>
                    <td>Dog Health</td>
                    <td>Pattern</td>
                </tr>
                <div className='Dogsense'>Dog sense</div>
            </div>
            <div className='Middel'>
                <img className="Dogimg" src='https://clipart-db.ru/file_content/rastr/dog_011.png'/>
                <div className='content'></div>
                <nav className='info'>
                    <ul>
                        <li>P</li>
                        <li>E</li>
                    </ul>
                </nav>
            </div>
            <div className='footer'>
                <tr className='BN'>
                    <td>Back</td>
                    <td>Next</td>
                </tr>
                <tr className='TF'>
                    <td>Twiter</td>
                    <td>Facebook</td>
                </tr>
            </div>
        </div>
    )
}
export default Middel;