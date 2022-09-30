const express = require("express");
const router = express.Router();
const {
  getTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getTasks).post(createTasks);
router.route("/:id").delete(deleteTask).get(getTask).patch(updateTask);

module.exports = router;
