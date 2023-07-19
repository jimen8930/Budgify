const router = require('express').Router();
const { Expense } = require('../../model')
const withAuth = require('../../utils/auth');


router.post ("/expenses", withAuth, async (req, res) => {
    try {
        const newExpense = await Expense.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newExpense);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;