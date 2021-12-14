const doSomething = () => console.log('test');
const messureSomething = () => {
    console.time('doSomething()')
    // do something and messure the time it takes
    doSomething()
    console.timeEnd('doSomething()')
}
messureSomething()