const Project = require("../models/project");

exports.getprojects = (req, res) => {
  Project.find({})
    .sort({ timestamps: -1 })
    .exec((err, project) => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json(project);
    });
};

exports.getprojectById = (req, res) => {
  const _id = req.params.id;
  Project.findById(_id)
    .select("-__v")
    .exec((err, foundproject) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(foundproject);
    });
};

exports.saveproject = (req, res) => {
  const projectData = req.body;
  const project = new Project(projectData);

  project.save((err, createdproject) => {
    if (err) {
      return res.status(422).send(err);
    }
    return res.json(createdproject);
  });
};

exports.updateproject = (req, res) => {
  const projectId = req.params.id;
  const projectData = req.body;

  Project.findById(projectId, (err, foundproject) => {
    if (err) {
      return res.status(422).send(err);
    }

    foundproject.set(projectData);
    foundproject.save((err, savedproject) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(savedproject);
    });
  });
};

exports.deleteproject = (req, res) => {
  const _id = req.params.id;
  //{ _id: projectId }
  Project.deleteOne({ _id }, (err, deletedproject) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json({ status: "DELETED" });
  });
};
