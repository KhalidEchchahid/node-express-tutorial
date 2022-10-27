const express = require('express');
const router = express.Router()
const { people } = require('../data')
const {
    getPeolpe,
    createPersone,
    createPersonePostman,
    updatePerson,
    deletePorson
} = require('../controllers/people')


// router.get('/', getPeolpe)
// router.post('/', createPersone)
// router.post('/postman', createPersonePostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePorson)

router.route('/').get(getPeolpe).post(createPersone)
router.route('/postman').post(createPersonePostman)
router.route('/:id').put(updatePerson).delete(deletePorson)

module.exports = router   