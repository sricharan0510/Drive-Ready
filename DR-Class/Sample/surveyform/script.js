var ob = {};
var ssc = {};
var inter = {};
var btech = {};
function fun(event) {
  ob[event.target.name] = event.target.value;
}
function fun2(event) {
    event.preventDefault();
    console.log(ob);

}