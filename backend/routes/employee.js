const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");
const auth = require("../middleware/auth"); // ✅ Middleware

// Create
router.post("/", auth, async (req, res) => {
  try {
    const emp = new Employee(req.body);
    await emp.save();
    res.json(emp);
  } catch (err) {
    res.status(400).json({ message: "Failed to create employee" });
  }
});

// Read
router.get("/", auth, async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

// Update
router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ message: "Employee deleted" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete employee" });
  }
});

module.exports = router;
