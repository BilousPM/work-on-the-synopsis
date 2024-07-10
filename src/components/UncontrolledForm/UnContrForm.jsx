const UnContrForm = () => {
  return (
    <div>
      <form>
        <label>
          <span>Name:</span>
          <input type="text" placeholder="Enter yor first name..."></input>
        </label>
        <label>
          <span>Email:</span>
          <input type="text" placeholder="Enter yor Email"></input>
        </label>
        <label>
          <span>Password:</span>
          <input type="text" placeholder="Enter yor Password"></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UnContrForm;
