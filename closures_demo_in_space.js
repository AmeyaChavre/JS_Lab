// Demonstarting Closures

// Declare an Outer Function or Enclosing Function

// Declare an Inner Function 

const gVar = "Outer Space"; // -- >> global variable

function OuterFunction(param1) // -- >> Outer/Enclosing Function
{
  const oVar = "Inside Solar System"; // -- >> Inner Function
  function InnerFunction(param2)
    {
      const iVar = "Inside Planet Earth";
      console.log(gVar); // Can access global variable
      console.log(oVar); // Can access variable of Outer Function 
      console.log(iVar); // Can access variable of its own
      console.log("Outer Param:", param1); // Can access parameter of Outer Function
      console.log("Inner Param:", param2); // Can access parameter of Inner Function
    }
InnerFunction("Homo Sapiens");
console.log(gVar);
console.log(oVar);
//console.log(iVar); // -- >> Can't Access !!
}
OuterFunction("Aliens");

console.log(gVar);
//console.log(oVar); -- >> Can't access!!
//console.log(iVar); -- >> Can't access!!


// OUTPUT

/*
Outer Space
Inside Solar System
Inside Planet Earth
Outer Param: Aliens
Inner Param: Homo Sapiens
Outer Space
Inside Solar System
Outer Space
*/