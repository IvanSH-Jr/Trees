import _ from 'lodash';
import { isFile, getChildren } from '@hexlet/immutable-fs-trees';

const getNodesCount = (tree) => {
    if (isFile(tree)) {
      // Возвращаем `1` для учёта текущего файла
      return 1;
    }
  
    // Если узел — директория, получаем его потомков
    const children = getChildren(tree);
    // Здесь начинается самая сложная часть
    // Считаем количество потомков для каждого из потомков,
    // рекурсивно вызывая нашу функцию `getNodesCount`
    const descendantCounts = children.map(getNodesCount);
    // Возвращаем `1` (текущая директория) + общее количество потомков
    console.log(descendantCounts);
    return 1 + _.sum(descendantCounts);
  };

  export { getNodesCount };