import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDeleteContact }) => {
  return (
    <div className={s.contact}>
      <div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/483464/person.svg"
            alt="person"
            width="18px"
            height="18px"
          />
          <p>{name}</p>
        </div>
        <div className={s.contactDetail}>
          <img
            src="https://www.svgrepo.com/show/535565/phone.svg"
            alt="phone"
            width="18px"
            height="18px"
          />
          <p>{number}</p>
        </div>
      </div>
      <button
        onClick={() => {
          handleDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;