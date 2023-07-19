const express = require('express')

const router = express.Router();
const addition = require('../controller/add')
// router.use(express.json())
router.get("/", addition.getData )
router.delete("/delete", addition.deletedata)

router.post("/add", addition.createData)
router.put("/update", addition.updateOne)
router.get("/get/:_id", addition.getOne)

module.exports = router
