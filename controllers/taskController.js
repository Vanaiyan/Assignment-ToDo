const express = require("express");
const task = require("../models/taskModel");

const createTask = async (req, res) => {
    try {
        const newTask = new task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json(err);
    }
};

const getTask = async (req, res) => {
    try {
        const taskInfo = await task.findById(req.params.id);
        if (!taskInfo) return res.status(404).json({ message: "Task not Found"});
        res.json(taskInfo);
    } catch (err) {
        res.status(500).json(err);
    }
};

const modifyTask = async (req, res) => {
    try {
        const updatedTask = await task.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if (!updatedTask) return res.status(404).json({ message: "Task not Found"});
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json(err);
    }
};

const deleteTask = async (req, res) => {
    try {
        const deleteTask = await task.findOneAndDelete(req.params.id);
        if (!deleteTask) return res.status(404).json({ message: "Task not Found"});
        res.json({ message: "Task is deleted"});
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = { createTask, getTask, modifyTask, deleteTask }
