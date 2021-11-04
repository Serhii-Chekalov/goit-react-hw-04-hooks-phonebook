import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, Button } from "./ContactList.styled";

const ContactList = ({ contacts, deleteId }) => (
  <div>
    <List>
      {contacts.map((contact) => {
        const { id, name, number } = contact;
        return (
          <ListItem key={id}>
            {name} - {number}{" "}
            <Button type="button" onClick={() => deleteId(id)}>
              Delete
            </Button>
          </ListItem>
        );
      })}
    </List>
  </div>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteId: PropTypes.func,
};

export default ContactList;
