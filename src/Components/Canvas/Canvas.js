import './Canvas.css';
import { useState } from 'react';
import apiClient from "/Users/leohacopian/Documents/user-portal/src/services/apiClient.js";

export default function Canvas({ form }) {

  const initialFormData = {
    questionnaire: "",
    responses: []
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData")
    console.log(JSON.stringify(formData, null, 1));
    //console.log("formResponse")
    //console.log("Submitting form data:", formResponse);

    const { data, error } = apiClient.register(formData);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }

    setFormData(initialFormData);//want to reset form after submitting --> doesnt work
    };

  const handleQuestionAnswer = (question, e) => {
    const questionNumber = question.number;//each question number
    const answer = e.target.value;
    const existingResponseIndex = formData.responses.findIndex(response => response.questionNumber === questionNumber);
  
    if (existingResponseIndex !== -1) {
      // Question already has a response, update the existing response
      setFormData((prevFormData) => ({
        ...prevFormData,
        questionnaire: form.id,
        responses: prevFormData.responses.map((response, index) =>
          index === existingResponseIndex
            ? { ...response, answer }
            : response
        ),
      }));
    } else {
      // Question does not have a response yet, add a new response to the array
      setFormData((prevFormData) => ({
        ...prevFormData,
        questionnaire: form.id,
        responses: [
          ...prevFormData.responses,
          { questionNumber, answer }
        ]
      }));
    }
  }

  return (
    <form className='Form-Container'>
      {form.question.map((question, index) => (
        <div className="Question-Container" key={index}>
          <label htmlFor={question._id}>{question.prompt}</label>
          {renderFormField(question, handleQuestionAnswer)}
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

// renderFormField function remains the same


const renderFormField = (question, handleQuestionAnswer) => {
  switch (question.type) {
    case 'Number Wheel':
      return <input type="number" id={question._id} name={question._id} />;
      case 'Radio Button':
        return (
          <div>
            {question.answers.map((answer, index) => (
              <label className="label-answer" key={index}>
                <input className="RadioButton-Input" type="radio" id={`${question._id}-${index}`} name={question._id} value={answer} onChange={(e) => handleQuestionAnswer(question, e)} />
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
              <input type="checkbox" id={`${question._id}-${index}`} name={question._id} value={answer} onChange={(e) => handleQuestionAnswer(question, e)}/>
              {answer}
            </label>
          ))}
        </div>
      );
    case 'Dropdown':
      return (
        <select onChange={(e) => handleQuestionAnswer(question, e)} id={question._id} name={question._id}>
          {question.answers.map((answer, index) => (
            <option key={index} value={answer}>
              {answer}
            </option>
          ))}
        </select>
      );
    case 'Textfield':
      return <input type="text" id={question._id} name={question._id} onChange={(e) => handleQuestionAnswer(question, e)}/>;
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

