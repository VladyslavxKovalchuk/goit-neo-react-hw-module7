import Contact from "./Contact";
import styles from "./css/ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../redux/contactsSlice";
import { deleteContact } from "../redux/contactsOps";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const hasContacts = contacts.length > 0;

  return (
    <div>
      {hasContacts ? (
        <ul className={styles.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li className={styles.contactItem} key={id}>
              <Contact
                id={id}
                name={name}
                phone={number}
                deleteContact={(contactId) => {
                  dispatch(deleteContact(contactId));
                }}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts found for your search query. Please try again.</p>
      )}
    </div>
  );
};

export default ContactList;