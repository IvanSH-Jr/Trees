import { isFile, getChildren, getName, getMeta, mkfile, mkdir} from '@hexlet/immutable-fs-trees';
import  cloneDeep  from 'lodash';

const changeOwner = (tree, owner) => {
    const name = getName(tree);
    const newMeta = cloneDeep(getMeta(tree));
    newMeta.owner = owner;
  
    if (isFile(tree)) {
      // Возвращаем обновлённый файл
      return mkfile(name, newMeta);
    }
    // Дальше идет работа, если директория
  
    const children = getChildren(tree);
    // Ключевая строчка
    // Вызываем рекурсивное обновление каждого ребёнка
    const newChildren = children.map((child) => changeOwner(child, owner));
    const newTree = mkdir(name, newChildren, newMeta);
  
    // Возвращаем обновлённую директорию
    return newTree;
  };

  export { changeOwner };