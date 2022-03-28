const users = require('./models');

// import { users } from '../models';
const  downloadResource = require('./util');

 const controller = {};

 controller.download = async (req, res) => {
   console.log("hereeeee")
  const fields = [
    {
      label: 'User Name',
      value: 'username'
    },
    {
      label: 'Last Name',
      value: 'lastname'
    },
  ];
  const data = await users.find({});

  return downloadResource(res, 'users.csv', fields, data);
 }

module.exports = controller;