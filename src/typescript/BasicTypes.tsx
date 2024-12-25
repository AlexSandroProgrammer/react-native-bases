export default function BasicTypes() {
  const name: string = "Alejandro";
  const age: number = 25;
  const isActive: boolean = true;
  const powers: string[] = ["a", "b", "c", "d", "e"];
  return (
    <>
      <h1>Basic Types</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>{isActive ? "Activo" : "No Activo"}</p>
      <ul>
        {powers.map((power, index) => (
          <li key={index}>{power}</li>
        ))}
      </ul>
    </>
  );
}
