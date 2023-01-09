const express = require('express')

const router = express()

router.use('/get', (req, res) => {
    res.send('HELLO FROM GET')
})

module.exports = router