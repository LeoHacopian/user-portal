import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import QForm from '../qForm/qForm'
import Preview from '../Preview/Preview';
import './QPortalNavbar.css';

function QPortalNavbar() {
  const [value, setValue] = useState(0);
  const [questionsData, setQuestionsData] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    
    <Box className="navbar-container" >
      <Tabs value={value} onChange={handleChange}  
      TabIndicatorProps={{
          style: { background: "grey"}
        }}aria-label="basic tabs example" centered>
        <Tab   sx={{ '&.Mui-selected': { color: '#424242' } }} label="Questions" />
        <Tab  sx={{ '&.Mui-selected': { color: '#424242' } }} label="Preview" />
      </Tabs>
      <Box hidden={value !== 0}>
      <QForm questionsData={questionsData} setQuestionsData={setQuestionsData} />
      </Box>
      <Box hidden={value !== 1}>
      <Preview questionsData={questionsData} />
      </Box>
    </Box>
  );
}

export default QPortalNavbar;
