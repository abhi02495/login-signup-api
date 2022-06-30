import bcrypt from "bcrypt";

export const checkUser = () => {
  let user = {
    email: "absh@gmail.com",
    application: "invito",
    authenticated: true,
    password: "$2b$10$2orr0af4siSIEoptrZevvOkZA5ciKzw3h7ThfQHsKuiRyTPLySSm.",
  };

  return user;
};

export const verifyUser = async (password, hash) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};
