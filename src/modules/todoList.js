'use strict';

import { storage } from './storage';

const todoList = (() => {
  const addProject = project => {
    storage.saveProject(project);
  };
  const getProject = name => {
    const projects = storage.retriveProjects();
    return projects.find(project => project.name === name);
  };

  const removeProject = index => {
    storage.deleteProject(index);
  };

  const getProjects = () => {
    return storage.retriveProjects();
  };
  return { addProject, getProject, getProjects, removeProject };
})();

export { todoList };