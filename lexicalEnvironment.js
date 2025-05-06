/**
 * Demonstrates lexical environments and execution contexts in JavaScript.
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