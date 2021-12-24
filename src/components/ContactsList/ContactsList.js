import React from "react";
import {
  List,
  ListItem,
  Name,
  Number,
  DeleteButton,
} from "./Contactsist.styled";

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Name>{name}</Name>
          <Number>{number}</Number>
          <DeleteButton onClick={() => onDeleteContact(id)} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactsList;
