const express = require("express");
const { createTask,
        getTask,
        modifyTask,
        deleteTask } = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);
router.get("/:id", getTask);
router.put("/:id", modifyTask);
router.delete("/:id", deleteTask);

module.exports = router;

