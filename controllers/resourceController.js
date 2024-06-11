const Resource = require('../models/Resource');

// Get all resources
exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.json(resources);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Get resources by language
exports.getResourcesByLanguage = async (req, res) => {
    try {
        const resources = await Resource.find({ language: req.params.language });
        res.json(resources);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Add a resource
exports.addResource = async (req, res) => {
    const { language, type, content } = req.body;

    try {
        const newResource = new Resource({ language, type, content });
        const resource = await newResource.save();
        res.json(resource);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Update a resource
exports.updateResource = async (req, res) => {
    const { language, type, content } = req.body;

    try {
        const resource = await Resource.findById(req.params.id);

        if (!resource) {
            return res.status(404).json({ msg: 'Resource not found' });
        }

        resource.language = language;
        resource.type = type;
        resource.content = content;

        await resource.save();
        res.json(resource);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

// Delete a resource
exports.deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);

        if (!resource) {
            return res.status(404).json({ msg: 'Resource not found' });
        }

        await resource.remove();
        res.json({ msg: 'Resource removed' });
    } catch (err) {
        res.status(500).send('Server error');
    }
};
