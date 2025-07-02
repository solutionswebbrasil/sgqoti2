
document.querySelectorAll('.sidebar > ul > li > a').forEach(function(menuItem) {
  menuItem.addEventListener('click', function(e) {
    const submenu = this.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      e.preventDefault();
      submenu.classList.toggle('show');
    }
  });
});

new Chart(document.getElementById('chartAuditorias'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [{
      label: 'Auditorias',
      data: [5, 8, 4, 6],
      backgroundColor: '#0d6efd'
    }]
  }
});

new Chart(document.getElementById('chartRetornos'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [{
      label: 'Toners Retornados',
      data: [12, 9, 14, 10],
      borderColor: '#6610f2',
      fill: false
    }]
  }
});

new Chart(document.getElementById('chartGarantias'), {
  type: 'pie',
  data: {
    labels: ['Aprovadas', 'Pendentes', 'Rejeitadas'],
    datasets: [{
      data: [10, 5, 2],
      backgroundColor: ['#198754', '#ffc107', '#dc3545']
    }]
  }
});

new Chart(document.getElementById('chartDocumentos'), {
  type: 'doughnut',
  data: {
    labels: ['POP', 'IT', 'BPMN'],
    datasets: [{
      data: [30, 20, 10],
      backgroundColor: ['#0d6efd', '#20c997', '#6f42c1']
    }]
  }
});

new Chart(document.getElementById('chartGarantiasFornecedor'), {
  type: 'bar',
  data: {
    labels: ['Fornecedor A', 'Fornecedor B', 'Fornecedor C'],
    datasets: [{
      label: 'Garantias',
      data: [12, 7, 5],
      backgroundColor: ['#0d6efd', '#6f42c1', '#20c997']
    }]
  }
});

new Chart(document.getElementById('chartTonersRecuperados'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr'],
    datasets: [
      {
        label: 'Quantidade',
        data: [40, 55, 60, 70],
        backgroundColor: '#198754'
      },
      {
        label: 'Valor R$',
        data: [800, 1200, 1500, 1800],
        backgroundColor: '#ffc107'
      }
    ]
  }
});
