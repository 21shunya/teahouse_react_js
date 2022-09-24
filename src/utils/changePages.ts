import { arr } from './productList';

export function incrementPage(page: number, totalPages: number, setPage: (number: number) => void) {
  if (page < totalPages) {
    setPage(page + 1);
  }
}

export function decrementPage(page: number, setPage: (number: number) => void) {
  if (page > 1) {
    setPage(page - 1);
  }
}

interface IGetPaginatedItems {
  query: string;
  limit: number;
  offset: number;
}

export function getPaginatedItems(p: IGetPaginatedItems) {
  const offset = p?.offset || 0;
  const limit = p?.limit || 20;

  const allData = arr.filter((item) => {
    if (p?.query && item.title.toLowerCase().includes(p.query.toLowerCase())) {
      return item;
    }
    if (!p?.query) {
      return item;
    }
    return item;
  });

  const slicedData = allData.slice(offset, offset + limit);

  return {
    totalLength: allData.length,
    data: slicedData,
  };
}

export function getItemById(id: number) {
  return (
    arr.filter((item) => item.id === id).shift() || {
      id: 1,
      title: 'Цзинь Юнь Дянь Хун «Золотые облачные почки» 1',
      description:
        'Цзинь Юнь Дянь Хун «Золотые облачные почки» 2021 /индекс 52дх44/ Некопчёный Сяочжун «Чёрный пион»',
      recommends:
        'Такого чая на хорошее чаепитие вдвоем нужно от 5 до 8 граммов. Если использовать воду «Сладкая роса. Чайная вода», потенциал чая раскроется в полной мере, даже если применить простейшие навыки заваривания.',
      cost: '990 ₽ – 3.300 ₽',
      type: '9-я ступень',
      costPerServing: 990,
      portion: 30,
      imgPath: 'var=1.png',
    }
  );
}
