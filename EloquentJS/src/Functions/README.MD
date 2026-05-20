
Execution flow when main.js:86 calls landscape():

1. landscape starts executing. result is initialized to "".
2. flat, mountain, and output are defined. Each captures result from the enclosing scope.
3. flat(3) runs → result = "___"
4. mountain(4) runs → result = "___/''''\\"
5. flat(6) runs → result = "___/''''\\______"
6. mountain(1) runs → result = "___/''''\\______/'\\"
7. flat(1) runs → result = "___/''''\\______/'\\_"
8. console.log('Landscape function executed: ', output()) runs.
9. output() is called. Through closure, it reads result from landscape's scope and returns it.
10. The string is printed.
11. landscape finishes and returns undefined (there is no return statement at the end).

The closures:

•  flat closes over result — it modifies the outer variable rather than a local copy.
•  mountain closes over result — same behavior.
•  output closes over result — it reads the accumulated value from the parent scope.