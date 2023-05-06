import './CanvasFormIcons.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import apiClient from "../../../src/services/apiClient.js";
import Canvas from './Canvas.js';

export default function CanvasFormIcons({ selectedForm, setSelectedForm }) {

    const [data, setData] = useState([]);
    const handleButtonClick = (form) => {
        setSelectedForm(form);
      };

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

      return (
        <div>
          <div className="grid-container">
            {data.map((item) => (
              <div key={item.id} className="Button-Container">
                <Link to={`/Form/${item.id}`}>
                <button className="Form-Button" onClick={() => handleButtonClick(item)}>
                  {item.name}
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
}