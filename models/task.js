const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const taskSchema = new Schema({
	label: String,
	priority: Number,
	location: String,
	creator: String,
	assignee: String,
	dateDue: Date,
	checklistItem: [String],
	subTask: [String] // The strings should be the object IDs for other tasks
}, {
	timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
