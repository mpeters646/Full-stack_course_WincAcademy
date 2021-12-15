const functions = {
  isNull: function () {
    return null;
  },
  checkValue: function (x) {
    return x;
  },
  createUser: () => {
    const user = {
      firstName: "Marco",
    };
    user["lastName"] = "Peters";
    return user;
  },
};

module.exports = functions;
