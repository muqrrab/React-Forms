import React, { useState, useEffect } from "react";

function Forms() {
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPeople = { id: new Date().getTime().toString(), ...person };
      setPeople([...people, newPeople]);
    } else {
      alert("Plz fill all fields");
    }
    setPerson({ name: "", email: "", age: "" });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleDel = (id) => {
    const newPeople = people.filter((p) => p.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="name"
              name="name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Add Person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, name, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
              <button style={{ color: "red" }} onClick={() => handleDel(id)}>
                Del
              </button>
            </div>
          );
        })}
      </article>
    </>
  );
}

export default Forms;
