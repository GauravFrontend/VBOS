import React from 'react';
import { Container, Typography } from '@mui/material';
import PositionForm from './Form/PositionForm';
 
const AddPosition = () => {
  const initialData = {
    postingTitle: '',
    minExperience: '',
    maxExperience: '',
    sourcingKeywords: '',
    numberOfPosition: '',
    departmentName: '',
    assignedRecruiters: '',
    hiringManager: '',
    salaryRangeMin: '',
    salaryRangeMax: '',
    levelDescription: '',
    jobType: '',
    jobOpeningStatus: '',
    workLocation: '',
    remote: false,
    dateOpened: '',
    targetDate: '',
    customer: '',
    projectName: '',
    emailID: '',
    mobileNumber: '',
    customerHiringManager: '',
    jobDescription: '',
  };
 
  const handleSubmit = (values:any) => {
    console.log('Add Position:', values);
  };
 
  return (
    <Container>
      <Typography variant="h3" component="h1">
        Add Position
      </Typography>
      <PositionForm initialValues={initialData} onSubmit={handleSubmit} />
    </Container>
  );
};
 
export default AddPosition;
 