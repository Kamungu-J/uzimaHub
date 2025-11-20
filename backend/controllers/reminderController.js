import Reminder from '../models/Reminder.js';

export const getReminders = async (req, res) => {
  const reminders = await Reminder.find({ user: req.user.id });
  res.json(reminders);
};

export const addReminder = async (req, res) => {
  const { text, time } = req.body;
  const reminder = new Reminder({ user: req.user.id, text, time });
  await reminder.save();
  res.status(201).json(reminder);
};

export const markDone = async (req, res) => {
  const reminder = await Reminder.findByIdAndUpdate(req.params.id, { done: true }, { new: true });
  res.json(reminder);
};
