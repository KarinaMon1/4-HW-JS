showInfo('BMW','M3', 2021, 200);
countSpeed(200);
countAge(2021);

function showInfo(manifacture, model, year, speed){
    let info = '';
    info += `Производитель: ${manifacture} \n`+
    `Mодель: ${model} \n`+
    `Год выпуска: ${year} \n` +
    `Средняя скорость: ${speed} км/час`;

    alert(info);
}

function countSpeed(speed){
    let distance = prompt('Введите растояние для подсчета (в км)');

    let time = distance/speed;
    let timeCheck = time;
    if(time/4 >= 0)
    {
        for(let i=0; i<=timeCheck; i+=4){
            time+=1;
        }
    }
    let finTime = `BMW M3 проедет ${distance}км за ${time} часа`;
    alert(finTime);
}

function countAge(year){
    var date = new Date();
    let now = date.getFullYear();
    let count = now-year;
    let al = `Кол-во лет с выпуска автомобиля: ${count}`;
    alert(al);
}