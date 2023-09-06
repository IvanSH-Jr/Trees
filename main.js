import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import { dfs } from './src/depth-first-search.js';
import { changeOwner } from './src/changeOwner.js';

const tree = mkdir('/', [
  mkdir('etc', [
    mkfile('bashrc'),
    mkfile('consul.cfg'),
  ]),
  mkfile('hexletrc'),
  mkdir('bin', [
    mkfile('ls'),
    mkfile('cat'),
  ]),
]);

dfs(tree);

console.log(changeOwner(tree, 'Ivan'));
