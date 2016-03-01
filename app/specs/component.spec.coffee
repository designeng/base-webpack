module.exports = {
    spec: {
        one: {$ref: 'two'},
        template: "
            |section
            |   header
            |   content
            |       oneBlock
            |       twoBlock
            |   footer
        "
    }
}