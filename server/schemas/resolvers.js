const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        projects: async () => {
            return Project.find({}).populate('type').populate('interval');
        },

        project: async () => {
            return Project.findByID(_id).populate('type').populate('interval');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
            
            const token = signToken(user);

            return { token, user };
        },

        createProject : async (parent, { title, authors, description, techUsed, dateCreated, github, depolyedLink }, context) => {
            if (context.user) {
                const newProject = new project({ title, authors, description, techUsed, dateCreated, github, depolyedLink }); 
                await User.findByIdAndUpdate(context.user._id, { $push: { projects: newProject } });

                return newProject;
            }

            throw new AuthenticationError('Please login to verify your site status')
        },

        updateProject: async (parent, { title, authors, description, techUsed, dateCreated, github, depolyedLink }) => {
            return Project.update({_id: id}, {title, authors, description, techUsed, dateCreated, github, depolyedLink});
        }
    }
};

module.exports = resolvers;