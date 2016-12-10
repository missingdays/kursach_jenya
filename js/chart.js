
var margin = {top: 30, right: 20, bottom: 30, left: 50},
    width = 600 - margin.left - margin.right,
    height = 1200 - margin.top - margin.bottom;

var data = [
    {
        date: '1650 г. до н.э.',
        header: 'Папирус Ахмеса',
        link: 'event/paper_ahmes.html',
        desc: ['Все задачи из папируса Ахмеса (записан ок. 1650 года до н. э.) имеют прикладной характер',' и связаны с практикой строительства, размежеванием земельных наделов и т. п.', 'Задачи сгруппированы не по методам, а по тематике.']
    },{
        date: '560 г. до н.э.',
        header: 'Теорeма Пифагора',
        link: 'event/pithagorean_theorem.html',
        desc: ['Теорема Пифагора — одна из основополагающих теорем евклидовой геометрии, устанавливающая', 'соотношение между сторонами прямоугольного треугольника: сумма квадратов', 'длин катетов равна квадрату длины гипотенузы.']
    }, {
        date: '300 г. до н.э.',
        header: 'Алгоритм Эвклида',
        link: 'event/euclidian_algorithm.html',
        desc: ['Алгоритм Евклида — эффективный алгоритм для нахождения наибольшего общего делителя двух', 'целых чисел (или общей меры двух отрезков). В самом простом случае алгоритм', 'Евклида применяется к паре положительных целых чисел и формирует новую пару,', 'которая состоит из меньшего числа и разницы между большим и меньшим числом.']
    }, {
        date: '1202 г.',
        header: 'Книга абака (Фибоначчи)',
        link: 'event/liber_abaci.html',
        desc: ['Главный труд Фибоначчи (Леонардо Пизанского), посвященный изложению и пропаганде', 'десятичной арифметики.']
    }, {
        date: '1520 г.',
        header: 'Комплексные числа',
        link: 'event/complex_numbers.html',
        desc: ['Итальянский математик Никколо Фонтана Тартальей (1499 - 1557)', 
        'в первой половине 16 века получил выражение для корня такого уравнения через некоторые', 
        'параметры, для нахождения которых составляется система.']
    }, {
        date: '1657 г.',
        header: 'Теория вероятностей',
        link: 'event/prob_theory.html',
        desc: ['Исследуя прогнозирование выигрыша в азартных играх, Блез Паскаль и Пьер Ферма', 
        'открыли первые вероятностные закономерности, возникающие при бросании костей.']
    },{
        date: '1684 г.',
        header: 'Математический анализ',
        link: 'event/calculus.html',
        desc: ['Публикация Лейбницом статьи "Новый метод максимумов и минимумов…".', 
        'Эта статья в сжатой и малодоступной форме излагала принципы нового метода,', 
        'названного дифференциальным исчислением.']
    }, {
        date: '1832 г.',
        header: 'Теория Галуа',
        link: 'event/group_theory.html',
        desc: ['Галуа заложил основы современной алгебры, вышел на такие фундаментальные понятия,', 
        'как группа и поле (конечные поля носят название полей Галуа).']
    }, {
        date: '1837 г.',
        header: 'Математическая логика',
        link: 'event/math_logic.html',
        desc: ['В работе «Формальная логика» (1847) де Морган описал понятие универсума и символы',
        'для логических операторов, записал известные «законы де Моргана». Позже он ввёл',
        'общее понятие математического отношения и операций над отношениями.']
    }, {
        date: '1873 г.',
        header: 'Теория множеств',
        link: 'event/set_theory.html',
        desc: ['Георг Кантор ввёл понятие произвольного числового множества, а затем и общее понятие',
        'множества — самого абстрактного понятия в математике. С помощью взаимно-однозначных',
        'отображений он ввёл понятие равномощности множеств, потом определил сравнение мощностей',
        'на больше-меньше и, наконец, классифицировал множества по величине их мощности: конечные,', 
        'счётные, континуальные и т. д.']
    }

];

function createDot(d, i){
    var shape = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    shape.setAttribute("cx", 300);
    shape.setAttribute("cy", i * 200 + 112);
    shape.setAttribute("r",  10);
    shape.setAttribute("fill", "#0c77f8");

    return shape;
}

function createTooltip(d, i){
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    g.setAttribute("transform", "translate(400," + (i*200+100) + ")");

    var link = document.createElementNS("http://www.w3.org/2000/svg", "a");
    link.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', d.link);

    var header = document.createElementNS("http://www.w3.org/2000/svg", "text");
    header.setAttribute("width", 500);
    header.setAttribute("y", 20);
    header.setAttribute("class", "header");
    header.innerHTML = d.header + ', ' + d.date;

    link.appendChild(header);

    g.appendChild(link);

    d.desc.forEach(function(t, i){
        var desc = document.createElementNS("http://www.w3.org/2000/svg", "text");
        desc.setAttribute("width", 500);
        desc.setAttribute("y", 50 + i*20);
        desc.setAttribute("class", "text");
        desc.innerHTML = t;

        g.appendChild(desc);
    });

    return g;

}

function createLine(from, to){
    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

    line.setAttribute('x1', 300);
    line.setAttribute('x2', 300);
    line.setAttribute('y1', from * 200 + 112)
    line.setAttribute('y2',  to * 200 + 112);

    line.setAttribute('stroke', '#0c77f8');
    line.setAttribute('stroke-width', 3);

    return line;
}

var chart = document.getElementById("chart");

data.forEach(function(d) {
    d.x = 10;
});

data.forEach(function(d, i){
    chart.appendChild(createDot(d, i));
});

data.forEach(function(d, i){
    chart.appendChild(createTooltip(d, i));    
});


for(var i = 0; i < data.length-1; i++){
    chart.appendChild(createLine(i, i+1));
}
