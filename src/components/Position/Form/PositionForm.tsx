import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import FormikTextField from 'src/components/Utils/FormikUtils/TextField';
 
const useStyles = makeStyles({
  container: {
    paddingTop: '20px',
    paddingBottom: '20px',
  },
  sectionTitle: {
    marginTop: '20px',
    marginBottom: '10px',
    fontWeight: 'bold',
    color: '#3f51b5',
  },
  buttonGroup: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
});
 
const validationSchema = Yup.object({
  postingTitle: Yup.string().required('Required'),
  minExperience: Yup.number().required('Required'),
  maxExperience: Yup.number().required('Required'),
  sourcingKeywords: Yup.string().required('Required'),
  numberOfPosition: Yup.number().required('Required'),
  departmentName: Yup.string().required('Required'),
  assignedRecruiters: Yup.string().required('Required'),
  hiringManager: Yup.string().required('Required'),
  salaryRangeMin: Yup.number().required('Required'),
  salaryRangeMax: Yup.number().required('Required'),
  levelDescription: Yup.string().required('Required'),
  jobType: Yup.string().required('Required'),
  jobOpeningStatus: Yup.string().required('Required'),
  workLocation: Yup.string().required('Required'),
  remote: Yup.boolean().required('Required'),
  dateOpened: Yup.date().required('Required'),
  targetDate: Yup.date().required('Required'),
  customer: Yup.string().required('Required'),
  projectName: Yup.string().required('Required'),
  emailID: Yup.string().email('Invalid email').required('Required'),
  mobileNumber: Yup.string().required('Required'),
  customerHiringManager: Yup.string().required('Required'),
  jobDescription: Yup.string().required('Required'),
});
 
const PositionForm = ({ initialValues, onSubmit }) => {
  const classes = useStyles();
 
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
 
  return (
    <Container className={classes.container}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Job Information */}
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" className={classes.sectionTitle}>
              Job Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="postingTitle" label="Posting Title" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="minExperience" label="Work Experience" type="number" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="maxExperience" label="Work Experience" type="number" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="sourcingKeywords" label="Sourcing Keywords" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="numberOfPosition" label="Number of Position" type="number" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="departmentName" label="Department Name" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="assignedRecruiters" label="Assigned Recruiters" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="hiringManager" label="Hiring Manager" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="salaryRangeMin" label="Salary Range Min" type="number" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="salaryRangeMax" label="Salary Range Max" type="number" formik={formik} />
          </Grid>
 
          {/* Level and Job Type */}
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" className={classes.sectionTitle}>
              Level and Job Type
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="levelDescription" label="Level Description" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="jobType" label="Job Type" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="jobOpeningStatus" label="Job Opening Status" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="workLocation" label="Work Location" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControlLabel
              control={
                <Checkbox
                  id="remote"
                  name="remote"
                  checked={formik.values.remote}
                  onChange={formik.handleChange}
                  color="primary"
                />
              }
              label="Remote"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="dateOpened" label="Date Opened" type="date" formik={formik} InputLabelProps={{ shrink: true }} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="targetDate" label="Target Date" type="date" formik={formik} InputLabelProps={{ shrink: true }} />
          </Grid>
 
          {/* Customer Information */}
          <Grid item xs={12}>
            <Typography variant="h6" component="h2" className={classes.sectionTitle}>
              Customer Information
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="customer" label="Customer" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="projectName" label="Project Name" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="emailID" label="Email ID" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="mobileNumber" label="Mobile Number" formik={formik} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormikTextField name="customerHiringManager" label="Customer Hiring Manager" formik={formik} />
          </Grid>
          <Grid item xs={12}>
            <FormikTextField
              name="jobDescription"
              label="Job Description"
              multiline
              rows={4}
              formik={formik}
            />
          </Grid>
 
          {/* Submit Button */}
          <Grid item xs={12} className={classes.buttonGroup}>
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
            <Button type="reset" variant="outlined" color="secondary" onClick={formik.handleReset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
 
export default PositionForm;