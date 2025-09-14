import type { RowProps } from '@/shared/Row';

// Данные в строку Json
function dataToJson(data: RowProps[] | []): string {
  return JSON.stringify(data);
}

// Данные из строки Json
function jsonToData(data: string): RowProps[] | [] {
  return JSON.parse(data);
}

// Выгрузка из локального хранилища
export function getDataLS() {
  const string = localStorage.getItem('ThingsArray');
  return string ? jsonToData(string) : [];
}

// Добавление элемента в локальное хранилище
export function addDataLS(data: RowProps) {
  const arr = getDataLS();
  arr.push(data);
  const string = dataToJson(arr);
  localStorage.setItem('ThingsArray', string);
}

// Изменение элемента в локальном хранилище
export function editDataLS(data: RowProps) {
  const arr = getDataLS();
  for (const el of arr) {
    if (el.key === data.key) {
      el.data = data.data;
    }
  }
  const string = dataToJson(arr);
  localStorage.setItem('ThingsArray', string);
}

// Удаление элемента из локальном хранилище
export function delDataLS(key: string) {
  const arr = getDataLS();
  const newArr = arr.filter((el) => el.key != key);
  const string = dataToJson(newArr);
  localStorage.setItem('ThingsArray', string);
}
