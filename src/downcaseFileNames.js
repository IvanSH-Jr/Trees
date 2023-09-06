import {
    mkdir, mkfile, isFile, getName, getMeta, getChildren,
  } from '@hexlet/immutable-fs-trees';

import  _  from 'lodash';

export const downcaseFileNames = (tree) => {
  const name = getName(tree).toLowerCase();
  console.log(name);
  const newMeta = _.cloneDeep(getMeta(tree));
  console.log(newMeta);
  if (isFile(tree)) return mkfile(name, newMeta);

  const children = getChildren(tree);
  const newChildren = children.map(downcaseFileNames);  
  return mkdir(name, newChildren, newMeta);
};