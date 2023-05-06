import './Form.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from "../../../src/services/apiClient.js";

export default function Form() {


    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const response = await apiClient.getAllItems()
            setData(response.data);
          } catch (error) {
            console.error('Error fetching items:', error);
          }
        };
    
        fetchItems();
      }, []);

      const handleButtonClick = (questionnaire) => {
        // Perform actions based on the clicked questionnaire
        console.log(`Button clicked for questionnaire: ${questionnaire.name}`);
        // ... other actions or state updates
      };

    return (
        <div className="form">
            <table className="styled-table">
            <thead className="Header">
                <tr>
                <th className='Table-Header'>Name</th>
                <th className='Table-Header'>Prompt</th>
                <th className='Table-Header'>Type</th>
                <th className='Table-Header'>Answers</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                item.question.map((question) => (
                    <tr key={question._id}>
                    <td>{item.name}</td>
                    <td>{question.prompt}</td>
                    <td>{question.type}</td>
                    <td>{question.answers.join(", ")}</td>
                    </tr>
                ))
                ))}
            </tbody>
            </table>
        </div>
    )
}