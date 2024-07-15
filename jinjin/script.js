// lineChart.js

// 차트를 그릴 캔버스 요소를 가져옵니다
var ctx = document.getElementById('myLineChart').getContext('2d');

// 새로운 Chart 객체를 생성합니다
var myLineChart = new Chart(ctx, {
    type: 'line', // 차트의 유형을 지정합니다 ('line'은 꺾은선 그래프입니다)
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7','8','9','10','11'], // x축 레이블
        datasets: [{
            label: 'My First dataset',
            data: [0, 10, 5, 2, 20, 30, 45,30,1,2,3], // 데이터 값
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // 배경색
            borderColor: 'rgba(75, 192, 192, 1)', // 경계선 색
            borderWidth: 1, // 경계선 두께
            fill: false // 배경을 채우지 않음
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // y축의 값이 0에서 시작하도록 설정
            }
        }
    }
});