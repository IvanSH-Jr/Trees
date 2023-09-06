import { isFile, isDirectory, getChildren, getName} from '@hexlet/immutable-fs-trees';
import chalk from 'chalk';

const green = chalk.bgGreen;

const dfs = (tree) => {
  console.log(getName(tree));
  if (isFile(tree)) return;

  const children = getChildren(tree);
  // Применяем функцию dfs ко всем дочерним элементам
  // Множество рекурсивных вызовов в рамках одного вызова функции
  // называется древовидной рекурсией
  children.forEach(dfs);
};

export { dfs };