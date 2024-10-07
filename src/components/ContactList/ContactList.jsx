import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact
              id={id}
              name={name}
              number={number}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;