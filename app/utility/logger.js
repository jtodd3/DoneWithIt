import Bugsnag from "@bugsnag/expo";

const log = (err) => Bugsnag.notify(err);

const start = () => Bugsnag.start();

export default { log, start };
