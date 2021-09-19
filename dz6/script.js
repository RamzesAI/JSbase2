// Задание 6

const alertFunc = (userSumm) => {
  const checkNumber = Number(userSumm) % 100;
  if (isNaN(checkNumber) || checkNumber === 0) {
    return 'Вам необходимо ввести сумму больше ноля одним числом.'
  }

  if (checkNumber === 11 || checkNumber === 12) {
    return `Ваша сумма в ${userSumm} рублей успешно зачислена.`
  }

  const nextCheckNumber = checkNumber % 10;

  if (nextCheckNumber === 1) {
    return `Ваша сумма в ${userSumm} рубль успешно зачислена.`
  }
  else if (nextCheckNumber >=2 && nextCheckNumber <= 4) {
    `Ваша сумма в ${userSumm} рубля успешно зачислена.`
  }
  else {
    return `Ваша сумма в ${userSumm} рублей успешно зачислена.`
  }
}

const userSumm = prompt('Какую сумму Вы хотите положить на счет: ');

const funcResult = alertFunc(userSumm); 
alert(funcResult);