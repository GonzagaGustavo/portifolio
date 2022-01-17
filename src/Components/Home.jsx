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
            <Button>Me conheça melhor!</Button>
        </div>
        <div>
            <h2>Linguagens que eu sei:</h2>
            <h1 className='typical'>
                {" "}
            <Typical
            loop={Infinity}
            steps={[
                "HTML",
                1000,
                "CSS",
                1000,
                "React",
                1000,
                "JavaScript",
                1000,
            ]}
            />
            </h1>
        </div>
        </div>
    )
}

export default Home
