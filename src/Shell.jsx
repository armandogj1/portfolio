import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// file tree
const fileTree = {
  '~': {
    home: ['/', 'home page'],
    projects: {
      index: ['/projects', 'projects home page'],
      CloudStorm: ['/projects/cloudstorm', 'Back-end microservice'],
      Robin: ['/projects/robin', 'Front-end e-commerce single page app'],
      Apptendance: ['/projects/apptendance', 'Attendance tool for use at Hack Reactor'],
      fesh: ['/projects/fesh', 'HTTP request CLI'],
      npmrum: ['/projects/npmrum', 'npm script runner'],
      gty: ['/projects/gty', 'CLI to stage files on git'],
      kDice: ['/projects/kDice', 'Spanish to spanish translator'],
      Namaslay: ['/projects/namaslay', 'Meditation social app'],
    },
    resume: ['/resume', 'Software Developer Resume'],
  },
};

// style
const style = {
  padding: '10px',
  background: '#333',
  color: '#52ffae',
  height: '300px',
  'font-size': '1.25em',
};

// helpers
const traverseDirs = (dir, target, path = '') => {
  let result;

  for (let key in dir) {
    if (key === target) return [path, dir[key]];

    if (!Array.isArray(dir[key]) && typeof dir[key] === 'object') {
      result = traverseDirs(dir[key], target, `${path}/${key}`);
    }
  }

  return result || [path];
};

const listElements = (pathStr) => {
  const [target] = pathStr.split('/').slice(-1);
  const [path, dir] = traverseDirs(fileTree, target);
  if (!dir) return 'No such directory';
  if (Array.isArray(dir)) return `${target} is not a directory`;
  let list = '';

  for (let key in dir) {
    list = `${list}  ${key}`;
  }

  return list;
};

const cat = (pathStr) => {
  const [target] = pathStr.split('/').slice(-1);
  const [path, dir] = traverseDirs(fileTree, target);

  if (!Array.isArray(dir)) return `${target} is not a file`;

  return dir[1];
};

const open = (router, file) => {
  const [target] = file.split('/').slice(-1);
  const [path, dir] = traverseDirs(fileTree, target);

  if (!Array.isArray(dir)) return `${target} is not a file`;

  router.push(dir[0]);
};

const executeCommand = (commandStr, router) => {
  const shellText = commandStr.split('\n');
  const [prompt, command, ...rest] = shellText[shellText.length - 1].split(' ');

  switch (command) {
    case 'clear':
      return '$ ';
    case 'echo':
      let response = rest.join(' ');
      if (/^['"]|['"]$/.test(response)) {
        response = response.slice(1, response.length - 1);
      }
      return commandStr + '\n' + response + '\n' + prompt + ' ';
    case 'cat':
      const fileTarget = rest.join('');
      const description = cat(fileTarget);
      return `${commandStr}\n${description}\n${prompt} `;
    case 'ls':
      const target = rest.join('') || '~';
      const list = listElements(target);
      return commandStr + '\n' + list + '\n' + prompt + ' ';
    case 'open':
      const fileToOpen = rest.join('');
      return open(router, fileToOpen);
    default:
      if (!command) return commandStr + '\n$ ';
      const notCommand = '\nCommand not valid';
      return commandStr + notCommand + '\n' + prompt + ' ';
  }
};

const Shell = () => {
  const initialPrompt = 'use shell to navigate website';
  const [prompt, setPrompt] = useState(`${initialPrompt}\n$ `);
  const router = useRouter();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      console.log('Hello');
      setPrompt((prevString) => executeCommand(prevString, router));
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.keyCode);

    const string = e.target.value;
    setPrompt(string);
  };

  return (
    <textarea
      value={prompt}
      onKeyDown={handleKeyPress}
      onChange={handleChange}
      style={style}
    ></textarea>
  );
};

export default Shell;
