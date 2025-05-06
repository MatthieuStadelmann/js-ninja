/**
 * Demonstrates lexical environments and execution contexts in JavaScript.
 * 
 * VARIABLE DECLARATION CHOICES:
 * 
 * In this example, we use 'const' instead of 'var' for several reasons:
 * 1. Block Scoping: 'const' is block-scoped, while 'var' is function-scoped
 * 2. Immutability: 'const' prevents reassignment of the variable
 * 3. Declaration and Initialization: 'const' variables must be initialized at declaration
 * 4. Clear Intent: 'const' communicates that these values should not be modified
 * 
 * Note about "hoisting":
 * The term "hoisting" is a simplified mental model. What actually happens is:
 * - For 'var': The variable declaration is processed during the creation phase of the execution context,
 *   before any code execution. The variable is initialized with 'undefined'.
 * - For 'const': The variable is not initialized until the actual declaration is reached in the code.
 *   This is why you cannot access it before its declaration (Temporal Dead Zone).
 * 
 * If we had used 'var' instead:
 * - The variables would be processed during the creation phase of their execution context
 * - They could be reassigned
 * - They would be accessible throughout the entire function
 * - The scope chain would still work the same way, but with less predictable behavior
 * 
 * EXECUTION CONTEXT AND LEXICAL ENVIRONMENT SCHEMA:
 * 
 * 1. Global Execution Context
 *    - Lexical Environment:
 *      * Environment Record (Variable Environment):
 *        { x: 10 }
 *      * Outer Environment Reference: null
 *      * This Binding: global object
 * 
 * 2. outer() Execution Context
 *    - Lexical Environment:
 *      * Environment Record (Variable Environment):
 *        { y: 20 }
 *      * Outer Environment Reference: Global Environment
 *      * This Binding: global object
 * 
 * 3. inner() Execution Context
 *    - Lexical Environment:
 *      * Environment Record (Variable Environment):
 *        { z: 30 }
 *      * Outer Environment Reference: outer() Environment
 *      * This Binding: global object
 * 
 * LEXICAL ENVIRONMENT COMPONENTS:
 * 1. Environment Record (Variable Environment): Stores variables and their values
 * 2. Outer Environment Reference: Link to the parent scope
 * 3. This Binding: Value of 'this'
 * 
 * LEXICAL SCOPE CHAIN:
 * inner() -> outer() -> Global
 * 
 * VARIABLE LOOKUP PROCESS for x + y + z:
 * 1. inner() looks for x: Not found in inner's environment record
 * 2. Follows outer reference to outer()'s environment record: Not found
 * 3. Follows outer reference to Global environment record: Found x = 10
 * 4. inner() looks for y: Not found in inner's environment record
 * 5. Follows outer reference to outer()'s environment record: Found y = 20
 * 6. inner() looks for z: Found in inner's environment record z = 30
 * 
 * Final calculation: 10 + 20 + 30 = 60
 */

const x = 10;

function outer() {
  const y = 20;

  function inner() {
    const z = 30;
    console.log(x + y + z);
  }

  inner();
}

outer();