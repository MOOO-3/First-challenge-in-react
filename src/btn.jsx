export function Btn() {
  const handleClick = () => {
    alert("hi");
  };

  return (
    <div className="btn">
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
