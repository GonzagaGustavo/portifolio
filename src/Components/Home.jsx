import React from 'react'
import a from './imagem.jpg'
import './Home.css'
import Button from './Button'
import Typical from 'react-typical'

function Home() {
    return (
        <div>
        <div className='home-container'>
            
            <img src={a} alt=""  className='eu'/>
            <h1>Gustavo Gonzaga</h1>

            <h2>Linguagens que eu sei:</h2>
            <h1 className='typical'>
                {" "}
            <Typical
            loop={Infinity}
            steps={[
                "HTML",
                2000,
                "CSS",
                2000,
                "React",
                2000,
                "JavaScript",
                2000,
            ]}
            />
            </h1>
        </div>
        <div className='wts'>
        <i class="fab fa-whatsapp fa-2x" id='wts'></i>
        </div>
        </div>
    )
}

export default Home
