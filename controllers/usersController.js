const users = [
  {
    firstName: "Alexander",
    lastName: "Mezquita",
    age: "24",
    id: "123",
  },
  {
    firstName: "Leonel",
    lastName: "Fernandez",
    age: "76",
    id: "1234",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const postUser = (req, res) => {
  const user = req.body;
  res.send(`User with the name ${user.name} added`);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const newUsers = users.filter((user) => user.id !== id);
  res.send(`User with the id:${id} deleted from the database `);
};

export const getUserById = (req, res) => {
  const { id } = req.params;
  const userFound = users.find((user) => user.id === id);
  //   console.log(req.params);
  res.send(userFound);
};
