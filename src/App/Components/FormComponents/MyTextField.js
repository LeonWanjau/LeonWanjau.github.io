import useStyles from './styles/TextField.styles'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

const MyTextField = ({ label, ...props }) => {
    const classes = useStyles()

    const [field, meta] = useField(props)

    return (
        <TextField
            label={label}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : ""}
            variant='outlined'
            fullWidth
            {...field}
            {...props}

        />
    )
}

export {MyTextField}