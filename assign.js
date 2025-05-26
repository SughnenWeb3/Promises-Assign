
function registerUser(name) {
    return new Promise(function (resolve, reject) {
        console.log("Registering user in progress...");

        setTimeout(function () {
            if (name) {
                console.log(`${name} registered successfully.`);
                resolve(name);
            } else {
                reject("Registration failed. Name is required.");
            }
        }, 2000);
    });
}


function sendEmail(name) {
    return new Promise(function (resolve) {
        console.log("Sending verification email in progress...");

        let progress = 0;
        let interval = setInterval(function () {
            progress += 1;
            console.log(`Email progress: ${progress}`);

            if (progress >= 5) {
                clearInterval(interval);
                console.log(`Email sent to ${name}@example.com`);
                resolve(name);
            }
        }, 500);
    });
}

function grantAccess(name) {
    return new Promise(function (resolve) {
        console.log("Granting access...");
        setTimeout(function () {
            console.log(`Access granted to ${name}.`);
            resolve();
        }, 1500);
    });
}
registerUser("sughnen")
    .then(sendEmail)
    .then(grantAccess)
    .catch(function (err) {
        console.error(err);
    });




function delayedGreeting(name) {
    return new Promise(function (resolve, reject) {
        if (!name) {
            reject("Name cannot be empty");
            return;
        }
        setTimeout(function () {
            resolve(`Hello, ${name}!`);
        }, 2000);
    });
}
delayedGreeting("sughnen")
    .then(function (message) {
        console.log(message); 
    })
    .catch(function (error) {
        console.error(error);
    });