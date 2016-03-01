module.exports = {
    spec: {
        two: [1,2,3]
        one: {$ref: 'two'},
        template: '
            |section
            |   header
            |   content
            |       oneBlock
            |       twoBlock
            |   footer
        '
    }
}