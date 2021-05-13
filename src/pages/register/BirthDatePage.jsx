import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useData } from "../../contexts/DataContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { DateTime } from 'luxon'

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "70%",
  },
  alignItem: {
    marginTop: "10%",
    textAlign: "center",
  },
}));

const schema = yup.object().shape({ 
  dob: yup.date().required("Birthdate is required").max(DateTime.now().minus({years: 18}).toString(), "You must be more than 18 years old"),
});

export default function BirthDatePage() {
  const { setValues, data } = useData();
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValue: { dob: data.dob },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const watchDob = watch("dob");

  const history = useHistory();

  const onSubmit = (regis) => {
    setValues({dob: regis.dob.toISOString()});
    history.push("/gender")
  };
  console.log(data);
  return (
    <div>
      <RegisHeader
        text="My Birthday is"
        iconType="back"
        onClick={() => history.push("/name")}
      ></RegisHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.alignItem}>
          <TextField
            id="date"
            label="Birthday"
            type="date"
            name="dob"
            format="dd/MM/YYYY"
            {...register("dob")}
            error={!!errors?.dob}
            helperText={errors?.dob?.message}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              inputProps: {
                max: DateTime.now().minus({years: 18}).toISODate()
              }
            }}
            defaultValue={DateTime.now().minus({years: 18}).toISODate()}
          />
        </div>
        <div className={classes.alignItem}>
          <LongButton
            name="CONTINUE"
            type="submit"
            variant={watchDob ? "contained" : "disabled"}
          ></LongButton>
        </div>
      </form>
    </div>
  );
}
