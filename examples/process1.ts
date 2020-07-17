import EventDispatcher from "../src";

(async () => {
    try {
        const myDispatcher = await EventDispatcher('amqp://localhost');

        myDispatcher.register('user.get', (user: string) => {
            return `Hello ${user}`;
        })
        await myDispatcher.listen()
    } catch (e) {
        console.log(e);
    }

})()