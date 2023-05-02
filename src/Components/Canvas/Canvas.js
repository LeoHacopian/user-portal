import './Canvas.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from "/Users/leohacopian/Documents/user-portal/src/services/apiClient.js";

export default function Canvas({ form }) {

  const [formData, setFormData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formResponse = {
      formId: form._id,
      responses: [],
    };

    form.question.forEach((question) => {
      const response = {
        question: question._id,
        answer: e.target[question._id]?.value || '',
      };
      formResponse.responses.push(response);
    });

    const { data, error } = await apiClient.register(formResponse);
    console.log(data);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  return (
    <form className='Form-Container'>
      {form.question.map((question, index) => (
        <div className="Question-Container" key={index}>
          <label htmlFor={question._id}>{question.prompt}</label>
          {renderFormField(question)}
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

const renderFormField = (question) => {
  switch (question.type) {
    case 'Number Wheel':
      return <input type="number" id={question._id} name={question._id} />;
    case 'Radio Button':
      return (
        <div>
          {question.answers.map((answer, index) => (
            <label className="label-answer" key={index}>
              <input className="RadioButton-Input" type="radio" id={`${question._id}-${index}`} name={question._id} value={answer}/>
              {answer}
            </label>
          ))}
        </div>
      );
    case 'Checkbox':
      return (
        <div>
          {question.answers.map((answer, index) => (
            <label key={index}>
              <input type="checkbox" id={`${question._id}-${index}`} name={question._id} value={answer} />
              {answer}
            </label>
          ))}
        </div>
      );
    case 'Dropdown':
      return (
        <select id={question._id} name={question._id}>
          {question.answers.map((answer, index) => (
            <option key={index} value={answer}>
              {answer}
            </option>
          ))}
        </select>
      );
    case 'Text Input':
      return <input type="text" id={question._id} name={question._id} />;
    case 'Rating Scale':
      return (
        <input
          type="range"
          id={question._id}
          name={question._id}
          min={question.answers.min}
          max={question.answers.max}
          step={question.answers.step}
        />
      );
    case 'Date Picker':
      return <input type="date" id={question._id} name={question._id} />;

    // Add more cases for different question types as needed

    default:
      return null;
  }
};

