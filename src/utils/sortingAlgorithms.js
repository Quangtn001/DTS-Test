const sortingAlgorithms = {
  bubbleSort: (array) => {
    const startTime = performance.now();
    // Implement bubble sort algorithm
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return { sortedArray: array, executionTime };
  },

  selectionSort: (array) => {
    const startTime = performance.now();
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
      }
    }
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return { sortedArray: array, executionTime };
  },

  insertionSort: (array) => {
    const startTime = performance.now();
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > current) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = current;
    }
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return { sortedArray: array, executionTime };
  },

  mergeSort: (array) => {
    const startTime = performance.now();

    const merge = (left, right) => {
      let result = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
        } else {
          result.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return result
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
    };

    const mergeSortHelper = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const middle = Math.floor(arr.length / 2);
      const left = arr.slice(0, middle);
      const right = arr.slice(middle);

      return merge(mergeSortHelper(left), mergeSortHelper(right));
    };

    const sortedArray = mergeSortHelper(array);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return { sortedArray, executionTime };
  },

  quickSort: (array) => {
    const startTime = performance.now();

    const quickSortHelper = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }

      const pivot = arr[Math.floor(arr.length / 2)];
      const left = [];
      const right = [];
      const equal = [];

      for (let element of arr) {
        if (element < pivot) {
          left.push(element);
        } else if (element > pivot) {
          right.push(element);
        } else {
          equal.push(element);
        }
      }

      return quickSortHelper(left).concat(equal, quickSortHelper(right));
    };

    const sortedArray = quickSortHelper(array);
    const endTime = performance.now();
    const executionTime = endTime - startTime;
    return { sortedArray, executionTime };
  },
};

export default sortingAlgorithms;
