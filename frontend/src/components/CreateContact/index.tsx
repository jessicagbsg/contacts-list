import { useForm } from "react-hook-form";
import { create } from "../../api";
import { Button } from "../Button";
import { Form, FormGroup, FormInput } from "./styles";
import { CreateContactDto } from "../../types";

export const CreateContact = () => {
  const { register, handleSubmit } = useForm();

  const handleCreateContact = async (data: CreateContactDto) => {
    try {
      await create({ ...data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit((data) =>
        handleCreateContact(data as CreateContactDto)
      )}
    >
      <FormGroup>
        <label>First Name</label>
        <FormInput type="text" placeholder="John" {...register("first_name")} />
      </FormGroup>

      <FormGroup>
        <label>Last Name</label>
        <FormInput type="text" placeholder="Doe" {...register("last_name")} />
      </FormGroup>
      <FormGroup>
        <label>Phone Number</label>
        <FormInput
          type="text"
          placeholder="+1(123)-456-7890"
          {...register("phone")}
        />
      </FormGroup>
      <Button
        color="#347af6"
        type="submit"
        style={{ display: "block", alignSelf: "end" }}
      >
        Submit
      </Button>
    </Form>
  );
};
