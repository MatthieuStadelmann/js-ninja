function makeLoggable(obj) {
    return new Proxy(obj, {
        get: function(target, prop, receiver) {
            console.log(`Getting property ${prop}`);
            return Reflect.get(target, prop, receiver);
        },
        set: function(target, prop, value, receiver) {
            console.log(`Setting property ${prop} to ${value}`);
            return Reflect.set(target, prop, value, receiver);
        }
    })
}

const ninja = {name: "Hattori"};
const loggableNinja = makeLoggable(ninja);
loggableNinja.name = "Yoshi";