import asyncHandler from "../middleware/asyncHandler.js";
import User from "../Models/userModel.js";

const postResult = asyncHandler(async (req, res) => {
  const {
    identification_number,
    name,
    last_name,
    date_of_birth,
    date_of_issue,
    date_of_expiry,
  } = req.body;

  const userExists = await User.findOne({ identification_number });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    identification_number,
    name,
    last_name,
    date_of_birth,
    date_of_issue,
    date_of_expiry,
  });

  if (user) {
    res.status(201).json({
      identification_number: user.identification_number,
      name: user.name,
      last_name: user.last_name,
      date_of_birth: user.date_of_birth,
      date_of_issue: user.date_of_issue,
      date_of_expiry: user.date_of_expiry,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const getUser = asyncHandler(async (req, res) => {
  console.log("Hi");
});

const updateUser = asyncHandler(async (req, res) => {
  console.log("hola");
});

const deleteUser = asyncHandler(async (req, res) => {
  console.log("bonjour");
});

export { postResult, getUser, updateUser, deleteUser };
