import React, { useState } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { FiPlus, FiMinus } from 'react-icons/fi'
const data = [
    {
        question: 'Question 1',
        answer: 'Answer 1'
    },
    {
        question: 'Question 2',
        answer: 'Answer 2'
    },
]

const Accordion = () => {
    const [clicked, setClicked] = useState(false);


    const toggleIcon = (index) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <IconContext.Provider value={{ color: '#00ffb9', size: '25px' }}>
            {data.map((item, index) => (
                <>
                    <Wrap onClick={() => toggleIcon(index)} key={index}>
                        <h1 >{item.question}</h1>
                        <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </Wrap>
                    {clicked === index && (
                        <Dropdown>
                            <p>{item.answer}</p>
                        </Dropdown>
                    )}
                </>
            ))}
        </IconContext.Provider>
    )
}


export default Accordion;


const AccordionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* position: relative; */
    /* height: 100px;
    background:#fff; */
`

const Container = styled.div`
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153,153,153,.3);
`
const Wrap = styled.div`
    color:#fff;
    margin: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-right:.5rem;
    text-align: center;
    cursor: pointer;
    width: 80%;
    /* transition:all 1s ease forwards; */
    h1{
        /* padding:.3rem; */
        font-size: 2rem;
    }
    `
const Dropdown = styled.div`
    background: #010f54;
    border: 1px solid #ccc;
    color: #ccc;
    width: 80%;
    height: 100%;
    display: flex;
    /* transform-origin:top;
    transition:all 1s ease forwards; */
    /* flex-direction: column; */
    /* justify-content: center; */
    align-items: center;
    text-align:center;
    /* border-bottom: 1px solid #00ffb9;
    border-width:.2px; */
    /* border-top: 1px solid #00ffb9; */
    p{
        /* margin-bottom:10px; */
        font-size: 30px; 
    }
    
`

