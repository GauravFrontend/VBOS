import { TextField } from '@mui/material';
 
const FormikTextField = ({ name, label, type = 'text', formik, ...props }) => (
  <TextField
    {...formik.getFieldProps(name)}
    {...props}
    type={type}
    label={label}
    fullWidth
    error={formik.touched[name] && Boolean(formik.errors[name])}
    helperText={formik.touched[name] && formik.errors[name]}
    onChange={(e) => {
      formik.handleChange(e);
    }}
  />
);
 
export default FormikTextField;
 
 