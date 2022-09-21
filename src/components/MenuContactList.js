import React from 'react'

const MenuContactList = ({ items }) => {


  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${items.id}`}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${items.id}`}
            aria-expanded="true"
            aria-controls={`collapse${items.id}`}
          >
            {items.title} {items.id}
          </button>
        </h2>
        <div
          id={`collapse${items.id}`}
          className="accordion-collapse show"
          aria-labelledby={`heading${items.id}`}
        >
          <div className="accordion-body">
            {items.contactList.map((person) => {
              return <div>{person.name}</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuContactList