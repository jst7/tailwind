/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);


  document.getElementById('toggle').addEventListener("click", function () {
    if (document.getElementById('menu').classList.contains('hidden')) {
      document.getElementById('menu').classList.remove('hidden');
    } else {
      document.getElementById('menu').classList.add('hidden');
    }
  })
})();
