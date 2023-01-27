import React, { useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';


export const ProposeTopic = (props) => {
    const [matric, setMatric] = useState('');
    const [topic, setTopic] = useState('');
   
    
    const data = [
        { Department: 'Computer Science', id: 1 },
        { Department: 'Electrical Engineering', id: 2 }
    ]

    const [options] = useState(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(matric);

        

       

    }

    return (
        <div className="topics-auth-container">

            <h2>Project Topic Area</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="matric"> Matric Number </label>
                <input value={matric} onChange={(e) => setMatric(e.target.value)} type="matric" placeholder="cp/program/department/number" id="matric" name="matric" />

                <label htmlFor="topic"> Project Topic 1</label>
                <input value={topic} onChange={(e) => setTopic(e.target.value)} type="topic" placeholder="Type in your first project topic" id="topic" name="topic" />

                <label htmlFor="topic"> Project Topic 2</label>
                <input value={topic} onChange={(e) => setTopic(e.target.value)} type="topic" placeholder="Type in your second project topic" id="topic" name="topic" />

                <label htmlFor="topic"> Project Topic 3</label>
                <input value={topic} onChange={(e) => setTopic(e.target.value)} type="topic" placeholder="Type in your third project topic" id="topic" name="topic" />
                <div className="login-form" style={{ width: "100vh", justifyContent: "center", display: "flex" }}>
                
                <label htmlFor='Department'> Select your department</label>  
                    <Multiselect options={options} displayValue = {'Department'} />
                </div>
            </form>

        </div>
    )


}