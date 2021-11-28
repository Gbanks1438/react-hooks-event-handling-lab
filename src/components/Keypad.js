// Code Keypad Component Here
function Keypad () {
    function whenChanged() {
        console.log("Entering password...");
      }
    return (
    <form>
  <input type="password" onChange={whenChanged} />
</form>
    );
}

export default Keypad;