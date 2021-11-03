import { List, ListItem, Button } from "./ContactList.styled";

const ContactList = ({ contacts, deleteId }) => {
  return (
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
};

export default ContactList;
