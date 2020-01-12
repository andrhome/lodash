const array = [1, 2, 5, 12, 3, 10, 16, 99, 18, 45, 5];
const array2 = [1, false, 5, 12, 3, null, 16, undefined, 18, ''];
const a = [1, 2];
const b = ['1', '2'];
const c = [true, false];
const arrayObj = [{id: 1, name: 'q'}, {id: 2, name: 'w'}];
const arrayObj2 = [
    {id: 1, name: 'name 1', active: true},
    {id: 2, name: 'name 2', active: false},
    {id: 3, name: 'name 3', active: true}
];
const obj = arrayObj2[0];


// console.log('Array2: ', (array2));
//
// console.log('chunk ', _.chunk(array, 2));
// console.log('compact ', _.compact(array2));
// console.log('drop ', _.drop(array, 3));
// console.log('dropRight ', _.dropRight(array, 3));
// console.log('dropWhile ', _.dropWhile(array, item => item < 10));
// console.log('dropRightWhile ', _.dropRightWhile(array, item => item > 10));
// console.log('fill ', _.fill(array, 'Hello', 3, 7));
// console.log('findIndex ', _.findIndex(array, item => item === 16));
// console.log('findIndex ', _.findIndex(arrayObj, obj => obj.name === 'w'));
// console.log('findIndex ', _.findIndex(arrayObj, {name: 'w'}));
// console.log('indexOf ', _.indexOf(array, 10));
// console.log('pull ', _.pull(array, 5, 99));
// console.log('reverse ', _.without(array, 5, 99));
// console.log('join ', _.join(array, ', '));
// console.log('reverse ', _.reverse(array));

// const zipped = _.zip(a, b, c);
// console.log('zip ', zipped);
// console.log('unzip ', _.unzip(zipped));

// console.log('Array: ', array);

// console.log('map ', _.map(arrayObj2, item => item.id + 3));
// console.log('map ', _.map(arrayObj2, 'name'));
// console.log('map ', _.map(arrayObj2, 'name'));
// console.log('map ', _.map(obj, (value, key) => key + ' ' + value));
// console.log('filter ', _.filter(arrayObj2, {active: true, id: 1}));
// console.log('filter ', _.filter(arrayObj2, ['active', true]));
// console.log('filter ', _.filter(arrayObj2, 'active'));
// console.log('find ', _.find(arrayObj2, {id: 2}));
// console.log('find ', _.find(arrayObj2, 'active'));
// console.log('findLast ', _.findLast(arrayObj2, 'active'));
// console.log('reject ', _.reject(arrayObj2, item => item.id > 1));

// const arrayIds = _.map(arrayObj2, item => item.id * _.random(10, true));
// console.log('arrayIds ', arrayIds);

// console.log('groupBy ', _.groupBy(arrayIds, Math.floor));
// const arrayStr = ['one', 'two', 'three'];
// const users = [
//     {id: 1, age: 25},
//     {id: 2, age: 32},
//     {id: 3, age: 28},
//     {id: 4, age: 33},
// ];
// console.log('groupBy ', _.groupBy(arrayStr, 'length'));
// console.log('groupBy ', _.groupBy(users, user => user.age > 30));

// console.log('shuffle ', _.shuffle(arrayObj2));
// console.log('size ', _.size(arrayObj2));
// console.log('sortBy ', _.sortBy(arrayObj2, item => item.active));
// console.log('sortBy ', _.sortBy(arrayObj2, 'active'));
// console.log('sortBy ', _.sortBy(arrayObj2, 'name'));
// console.log('isEmpty ', _.isEmpty(null));
// console.log('isEmpty ', _.isEmpty([]));

// console.log('arrayObj2: ', arrayObj2);

// console.log('add ', _.add(3, 28));
// console.log('multiply ', _.multiply(8, 7));
// console.log('subtract ', _.subtract(10, 2));
// console.log('divide ', _.divide(10, 2));

const numbersSet = [1, 4, 6, 19, 3, 21];
const objectsSet = [{n: 1}, {n: 5}, {n: 13}, {n: 15}, {n: 9}];

// console.log('max ', _.max(numbersSet));
// console.log('maxBy ', _.maxBy(objectsSet, 'n'));
// console.log('min ', _.min(numbersSet));
// console.log('minBy ', _.minBy(objectsSet, 'n'));

// console.log('mean ', _.mean(numbersSet));
// console.log('meanBy ', _.meanBy(objectsSet, 'n'));
// const mean = _.divide(_.sum(numbersSet), _.size(numbersSet));
// console.log('custom mean ', mean);

// console.log('sum ', _.sum(numbersSet));
// console.log('sumBy ', _.sumBy(objectsSet, 'n'));

// console.log('random ', _.random(10));
// console.log('random ', _.random(10, 20));
// console.log('random ', _.random(10, 20, true));

// const num = _.random(10, 20, true);
// console.log('round ', _.round(num));
// console.log('round ', _.round(num, 2));

// console.log('inRange ', _.inRange(4, 10));
// console.log('inRange ', _.inRange(4, 10, 12));

const str = '     hello world, * ! I live JavaScript!      ';

// console.log('camelCase ', _.camelCase(str));
// console.log('lowerCase ', _.lowerCase(str));
// console.log('upperCase ', _.upperCase(str));
// console.log('capitalize ', _.capitalize(str));
// console.log('trim ', _.trim(str));
// console.log('trimStart ', _.trimStart(str));
// console.log('trimEnd ', _.trimEnd(str));
// console.log('words ', _.words(str));
// console.log('repeat ', _.repeat('#', 10));

const str2 = 'test';
const number = 7;
const obj2 = {a: 12};
const arr = [];
const myNull = null;
const myUndef = undefined;
const myVoid = void 0;

// console.log('isString ', _.isString(str2));
// console.log('isString ', _.isString(number));
// console.log('isNumber ', _.isNumber(number));
// console.log('isNumber ', _.isNumber(str2));
// console.log('isObject ', _.isObject(obj2));
// console.log('isObject ', _.isObject(arr));
// console.log('isArray ', _.isArray(arr));
// console.log('isArray ', _.isArray(obj2));
// console.log('isNull ', _.isNull(myNull));
// console.log('isNull ', _.isNull(myUndef));
// console.log('isUndefined ', _.isUndefined(myUndef));
// console.log('isUndefined ', _.isUndefined(myNull));
// console.log('isUndefined ', _.isUndefined(myVoid));

/**
 * clone() method
 */
// function func() {
//     const obj = {a: 1};
//     console.log(obj, func2(obj));
// }
//
// function func2(o) {
//     o = _.clone(o);
//     o.b = 2;
//     return o;
// }
//
// func();

/**
 * assign() and extend() methods
 */
// function A() {
//     this.a = 1;
// }
//
// function B() {
//     this.b = 2;
// }
//
// A.prototype.aa = 11;
// B.prototype.bb = 22;
//
// console.log('assign ', _.assign({q: 10}, new A, new B));
// console.log('extend ', _.extend({q: 10}, new A, new B));

/**
 * bindAll() and delay() methods
 */
// function User(name) {
//     this.name = name;
//     _.bindAll(this, ['sayHi']);
// }
//
// User.prototype = {
//     sayHi: function (substring = '') {
//         console.log('Hi, ' + this.name + '! ' + substring);
//     },
//     sayHiWithDelay: function (delay) {
//         setTimeout(this.sayHi, delay);
//         _.delay(this.sayHi, delay, 'How are you?');
//     }
// };
//
// const valera = new User('Valera');
// valera.sayHi();
// valera.sayHiWithDelay(2000);

// console.log('range ', _.range(10));
// console.log('range ', _.range(10, 25));
// console.log('uniqueId ', _.uniqueId('pref_'));

// const template = _.template('<div><%= content %></div>');
// console.log('template ', template({content: 'New HTML template'}));






