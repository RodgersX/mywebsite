
exports.handler = async (event, context) => {
    const body = JSON.parse(event.body)

    console.log(body)
}