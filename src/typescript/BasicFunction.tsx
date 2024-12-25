export default function BasicFunction() {
  const addTwoNumbers = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <div>
      <h3>Basic Functions</h3>
      <span>El resultado de sumar {addTwoNumbers(2, 8)}</span>
    </div>
  );
}
