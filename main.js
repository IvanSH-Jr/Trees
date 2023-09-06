import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';
import { dfs } from './src/depth-first-search.js';
import { changeOwner } from './src/changeOwner.js';
import { downcaseFileNames } from './src/downcaseFileNames.js';

const tree1 = mkdir('/', [
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

const tree2 = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);

//dfs(tree1);
const tree3 = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('config.json'),
    ]),
  ]),
  mkfile('hOsts'),
], { lala: 'hexlet' });

console.log(downcaseFileNames(tree3));