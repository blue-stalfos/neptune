const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
	label: String,
	priority: Number,
	location: String,
	creator: String,
	assignee: String,
	dateDue: Date,
	subTask: ObjectId //This should probably be an array of task objects
}, {
	timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
