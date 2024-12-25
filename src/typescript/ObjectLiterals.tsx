import { User } from "./ObjectLiteral.interface";

export default function ObjectLiterals() {
  const user: User = {
    age: 38,
    name: "John Doe",
    address: {
      country: "USA",
      houseNo: 123,
      street: "123 Main St",
    },
  };
  return (
    <>
      <h1>Object Literals</h1>
      <p>User Details:</p>
      {JSON.stringify(user, null, 2)}
    </>
  );
}
