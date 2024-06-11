const express = require('express');
const router = express.Router();
const {
    getResources,
    getResourcesByLanguage,
    addResource,
    updateResource,
    deleteResource,
} = require('../controllers/resourceController');

router.get('/', getResources);
router.get('/:language', getResourcesByLanguage);
router.post('/', addResource);
router.put('/:id', updateResource);
router.delete('/:id', deleteResource);

module.exports = router;
