import React, { FC } from "react";
import { IContact } from "../../models/IContact";

interface ContactItemProps {
  contact: IContact;
  remove: (contact: IContact) => void;
  update: (contact: IContact) => void;
}
const ContactItem: FC<ContactItemProps> = ({ contact, remove, update }) => {
  const handlerRemove = (event: React.MouseEvent) => {
    event.stopPropagation();

    remove(contact);
  };

  const handlerUpdate = (event: React.MouseEvent) => {
    const fio = prompt() || ""
    update({ ...contact, fio });
  };

  return (
    <div className="button-group" onClick={handlerUpdate}>
      {contact._id}. {contact.fio}
      <button onClick={handlerRemove}>Delete</button>
      {/* <button onClick={handlerUpdate}>Update</button> */}
    </div>
  );
};

export default ContactItem;
