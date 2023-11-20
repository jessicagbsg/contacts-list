import { Button } from "../Button";
import { Form, FormGroup, FormInput } from "./styles";

export const CreateContact = () => {
  const handleEditContact = () => {};
  return (
    <Form onSubmit={handleEditContact}>
      <FormGroup>
        <label>First Name</label>
        <FormInput type="text" placeholder="John" />
      </FormGroup>

      <FormGroup>
        <label>Last Name</label>
        <FormInput type="text" placeholder="John" />
      </FormGroup>
      <FormGroup>
        <label>Phone Number</label>
        <FormInput type="text" placeholder="John" />
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
