const crypto = require("crypto")
const random = []
for (let i = 0; i < 1_000_000; i++) {
    random.push(crypto.randomInt(1000).toString())
}
random.sort()
console.log(random)