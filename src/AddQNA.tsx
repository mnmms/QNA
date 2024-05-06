import React from "react";
import { QNAForm } from "./type";
import { Box, Button, Stack, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  submitHandler: SubmitHandler<QNAForm>;
}

const AddQNA: React.FC<Props> = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QNAForm>({
    defaultValues: {
      question: "",
      answer: "",
    },
  });

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(submitHandler)}
      sx={{
        maxWidth: 400,
        "& input": { p: "10px" },
        "& .MuiFormHelperText-root": { marginLeft: "2px" },
      }}
    >
      <Stack direction={"column"} spacing={2}>
        <TextField
          type="text"
          placeholder="question"
          {...register("question", { required: true })}
          error={Boolean(errors.question)}
          helperText={errors.question && "question is required"}
        />

        <TextField
          type="text"
          placeholder="answer"
          {...register("answer", { required: true })}
          error={Boolean(errors.answer)}
          helperText={errors.answer && "answer is required"}
        />
      </Stack>

      <Button type={"submit"} variant={"contained"} sx={{ my: 2 }}>
        등록
      </Button>
    </Box>
  );
};

export default AddQNA;
