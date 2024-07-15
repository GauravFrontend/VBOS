import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PositionForm from './Form/PositionForm';
 
const useStyles = makeStyles({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
});
const EditPosition = () => {
  const classes = useStyles();
 
  const initialData = {
    postingTitle: 'Software Developer',
    minExperience: 2,
    maxExperience: 5,
    sourcingKeywords: 'React, Node.js, JavaScript',
    numberOfPosition: 3,
    departmentName: 'JavaScript',
    assignedRecruiters: 'ABC',
    hiringManager: 'XYZ',
    salaryRangeMin: 60000,
    salaryRangeMax: 80000,
    levelDescription: 'Mid Level',
    jobType: 'Full-Time',
    jobOpeningStatus: 'Open',
    workLocation: 'Baner',
    remote: true,
    dateOpened: '2023-01-01',
    targetDate: '2023-02-01',
    customer: 'ABC Corp',
    projectName: 'Project X',
    emailID: 'manager@abccorp.com',
    mobileNumber: '123-456-7890',
    customerHiringManager: 'manager',
    jobDescription: 'Develop and maintain web applications...',
  };
 
  const handleSubmit = (values: any) => {
    console.log('Edit Position:', values);
  };
 
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Edit Position
      </Typography>
      <PositionForm initialValues={initialData} onSubmit={handleSubmit} />
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary">
          Resume
        </Button>
      </div>
    </Container>
  );
};
 
export default EditPosition;
 