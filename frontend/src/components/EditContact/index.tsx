import { Button } from "../Button";
import { UpdateContactDto } from "../../types";
import { Form, FormGroup, FormInput } from "./styles";
import { IContact } from "../Contact/types";
import { useForm } from "react-hook-form";
import { updateContact } from "../../api";
import { toast } from "react-toastify";

export const EditContact = ({
  firstName,
  lastName,
  phoneNumber,
  id,
  setEditModalOpen,
}: IContact) => {
  const { register, handleSubmit } = useForm();

  const handleEditContact = async (data: UpdateContactDto) => {
    try {
      if (!id) return;
      if (!data.last_name && !data.last_name && !data.phone) {
        toast("There should be at least one change", { type: "error" });
      }

      let updateParams: Record<string, string> = {};
      if (data.first_name) {
        updateParams.first_name = data.first_name;
      }

      if (data.last_name) {
        updateParams.last_name = data.last_name;
      }

      if (data.phone) {
        updateParams.phone = data.phone;
      }

      await updateContact(id, updateParams);

      if (!setEditModalOpen) return;
      setEditModalOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit((data) =>
        handleEditContact(data as UpdateContactDto)
      )}
    >
      <FormGroup>
        <label>First Name</label>
        <FormInput
          type="text"
          placeholder={firstName}
          {...register("first_name")}
        />
      </FormGroup>

      <FormGroup>
        <label>Last Name</label>
        <FormInput
          type="text"
          placeholder={lastName}
          {...register("last_name")}
        />
      </FormGroup>
      <FormGroup>
        <label>Phone Number</label>
        <FormInput
          type="text"
          placeholder={phoneNumber}
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
