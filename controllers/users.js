import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req, res) => {
  console.log("Post route reached");
  const user = req.body;

  const userId = uuidv4()

  const userWithId = {...user, id: userId}

  users.push(userWithId)
  res.send(`User with name ${user.name} has been added!`);
}

export const getAllUsers = (req, res) => {
  res.send(users)
}

export const getUser = (req, res)=>  {
  const { id }= req.params;
  const uniqueUser = users.find((user)=> user.id == id)
  res.send(uniqueUser);
}

export const deleteUser = (req, res)=> {
  const { id }= req.params;
  
  const userName = users.find((user)=> user.id == id)
  
  res.send(`User ${userName.name} has been deleted from the App`);
  
  users = users.filter((user)=> user.id !== id)

}

export const updateUser = (req, res)=> {
  const { id }= req.params;

  const { name, age, gender }= req.body;

  let user = users.find((user)=> user.id == id)

  if(name) user.name = name;
  
  if(age)  user.age = age;
  
  if(gender)user.gender = gender;

  res.send(`User with name ${user.name} has been updated`)

}