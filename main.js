$(function() {
  // variables
  const api = 'http://localhost:3000/';
  const $test1 = $('#test1');
  const $test2 = $('#test2');
  const $tableContainer = $('#csv2table');
  const $noContents = $('#no-contents');

  // listeners
  $test1.on('click', showTest1Csv);
  $test2.on('click', showTest2Csv);

  // functions
  function showTest1Csv() {
    hideNoContentsMessage();
    $tableContainer.csv2table(`${api}test1.csv`, {
      className_table: 'table table-bordered',
      appendThead: ['年', '順位', '選手名', '在籍', '球団'],
    });
  }

  function showTest2Csv() {
    hideNoContentsMessage();
    $tableContainer.csv2table(`${api}test2.csv`, { className_table: 'table table-bordered' });
  }

  function hideNoContentsMessage() {
    $noContents.hide();
  }

  // excutes
  $.csv2table.cssReset();
});
