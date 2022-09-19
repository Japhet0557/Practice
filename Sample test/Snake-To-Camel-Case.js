/**One of your new coworkers has submitted code with variable names in snake case, where multiword 
 * names are separated by underscores (such as my_counter). Your company's convention is to use only 
 * lower camel case, where multiword variable names are concatenated, capitalizing the first letter 
 * of every word except the first (e.g. myCounter).
Your team is tasked with taking the source code src from your coworker, and returning code with the all 
the names in snake case converted into lower camel case. More specifically:
•	Variable names may start with one or more underscores, and these should be preserved. 
For example _the_variable should become _theVariable
•	Variable names may end with trailing underscores, and these should be preserved. 
For example, the_variable__ should become theVariable__.
•	To keep the problem simple, you are not restricted to variable names, but instead should replace all 
instances of snake case.
Example
For src = "This is the doc_string for __secret_fun", the output should be
solution(src) = "This is the docString for __secretFun".
 */

/**function snakeToCamel(str){
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (m,chr) => {
      return chr.toUpperCase();
});

}*/

function snakeToCamel(str){
  return str.replace(
    /(?!^)_(.)/g,
    (_, char) => char.toUpperCase()
  );
}

console.log(snakeToCamel('_secret_fun')); 
console.log(snakeToCamel('the_variable_'));
