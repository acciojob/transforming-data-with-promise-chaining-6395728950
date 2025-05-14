//your JS code here. If required.
document.getElementById('btn').addEventListener("click", () => {
    const val = parseFloat(document.getElementById('ip').value.trim()); // Convert to a number
    const div = document.getElementById('output');

    const promise1 = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val);
            }, 2000);
        });
    };

    const promise2 = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val * 2);
            }, 2000);
        });
    };

    const promise3 = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val - 3);
            }, 1000);
        });
    };

    const promise4 = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val / 2);
            }, 1000);
        });
    };

    const promise5 = (val) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(val + 10);
            }, 1000);
        });
    };

    promise1(val).then((result) => {
        div.textContent = `Result: ${result}`;
        return promise2(result);
    }).then((result) => {
        div.textContent = `Result: ${result}`;
        return promise3(result);
    }).then((result) => {
        div.textContent = `Result: ${result}`;
        return promise4(result);
    }).then((result) => {
        div.textContent = `Result: ${result}`;
        return promise5(result);
    }).then((result) => {
        div.textContent = `Final Result: ${result}`;
    }).catch((err) => {
        div.textContent = `Error: ${err}`;
    });
});