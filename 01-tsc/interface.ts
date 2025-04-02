// Interface example
const user: userType = {
  firstName: "Nitin",
  email: "email@gmail.com",
  age: 20,
  address: {
    city: "Jaipur",
    pinCode: 302019,
  },
};

interface userType {
  firstName: string;
  email: string;
  age: number;
  address: {
    city: string;
    pinCode: number;
    isUrban?: boolean;
  };
}
