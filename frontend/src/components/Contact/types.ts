export interface IContact {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  phoneNumber?: string;
  id?: number;
  setEditModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}
