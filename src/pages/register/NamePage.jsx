import React, {useContext} from "react";
import { TextField } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../../contexts/DataContext";
import { useHistory } from "react-router-dom";
import { EditModeContext } from "../../contexts/EditModeContextProvider";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, "First name must be alphabetical")
    .required("First name is a required field"),
});

export default function NamePage() {
  const { setValues, data } = useData();
  const { editMode, setEditMode } = useContext(EditModeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValue: { firstName: data.firstName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const watchName = watch("firstName");
  const history = useHistory();

  const onSubmit = (regis) => {
    setValues(regis);
    setEditMode(false);
    history.push("/birthdate");
  };


  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <RegisHeader
        text="My First Name is"
        iconType="none"
        onClick={() => history.push("/login")}
      />
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
        <div
          style={{
            marginTop: "10%",
            textAlign: "center",
            position: "sticky",
            bottom: "0",
            width: "100vw",
          }}
        >
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
