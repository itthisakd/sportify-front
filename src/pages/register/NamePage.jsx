import React from "react";
import { TextField } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../../contexts/DataContext"
import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().matches(/^[A-Za-z]+$/, "First name must be alphabetical").required("First name is a required field"),
});

export default function NamePage() {
  const {setValues, data} = useData()
  const { register, handleSubmit, formState: {errors}, watch } = useForm({
    defaultValue: { firstName: data.firstName},
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const watchName = watch("firstName")
  const history = useHistory();

const onSubmit = (regis) => {
  setValues(regis)
  history.push("/birthdate")
};

  return (
    <div>
      <RegisHeader text="My First Name is" iconType="cross"></RegisHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <TextField
          placeholder="Enter name"
          style={{ width: "80%" }}
          name="firstName"
          {...register("firstName")}
          error={!!errors?.firstName}
          helperText={errors?.firstName?.message}
        />
      </div>
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <LongButton
          name="CONTINUE"
          type="submit"
          variant={watchName ? "contained" : "disabled"}
        />
      </div>
      </form>
    </div>
  );
}
