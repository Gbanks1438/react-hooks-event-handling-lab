// Code EyesOnMe Component Here
function EyesOnMe () {
    function notLooking() {
        console.log("Hey! Eyes on me!");
      }
      function looking() {
        console.log("Good!");
      }
return (
    <button onFocus={looking} onBlur={notLooking}>Eyes on me</button>
)
}

export default EyesOnMe;