function loadBigData() {
  const bigColumns = new Array()

  for (let i = 0; i < 20; i++) {
    const column = {
      sortMode: 'D'
    }
    column.name = 'COL_' + i
    column.title = 'COL_' + i
    column.size = 0

    bigColumns.push(column)
  }

  const bigRows = new Array()

  const inputValue = document.querySelector('input').value

  for (let i = 0; i < inputValue; i++) {
    const row = {
      selected: false,
      values: {}
    }

    // init fields
    bigColumns.forEach(c => {
      row.values[c.name] = faker.name.findName()

      row.values['ID'] = '' + i
      row.values['RowID'] = '' + i
    })

    bigRows.push(row)
  }

  const table = document.querySelector('smeup-mat')
  table.columns = bigColumns
  table.rows = bigRows
}

function toggleMatFilter(event) {
  document.querySelector('smeup-mat').filterable = event.target.checked
}

function toggleMatSort(event) {
  document.querySelector('smeup-mat').sortable = event.target.checked
}

const matrix = JSON.parse(`{
  "data": {
    "columns": [{
      "name": "STR001",
      "size": 0,
      "title": "NR"
    }, {
      "name": "STR002",
      "size": 0,
      "title": "NR"
    }, {
      "name": "STR003",
      "size": 0,
      "title": "NR neg.(-n)"
    }, {
      "name": "STR004",
      "size": 0,
      "title": "NR neg.(n-)"
    }, {
      "name": "STR005",
      "size": 0,
      "title": "NR (dec.sep: ,)"
    }, {
      "name": "STR006",
      "size": 0,
      "title": "Oggetto"
    }, {
      "name": "STR007",
      "size": 0,
      "title": "Oggetto"
    }, {
      "name": "STR008",
      "size": 0,
      "title": "Percentuale"
    }],
    "rows": [{
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "20.00 %",
        "STR007": "1",
        "STR006": "FIOGIA",
        "STR005": "1.10200",
        "STR004": "-1",
        "STR003": "-1.12",
        "STR002": "1.1",
        "STR001": "5"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "33.30 %",
        "STR007": "2",
        "STR006": "SANCOS",
        "STR005": "2.10000",
        "STR004": "-3",
        "STR003": "-2.13",
        "STR002": "2.0",
        "STR001": "1"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "0.00 %",
        "STR007": "3",
        "STR006": "PARFRA",
        "STR005": "3.12345",
        "STR004": "-3",
        "STR003": "-3.14",
        "STR002": "3.1",
        "STR001": "1"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "",
        "STR007": "1",
        "STR006": "FORFED",
        "STR005": "4.40000",
        "STR004": "-4",
        "STR003": "-4.15",
        "STR002": "4.2",
        "STR001": "2"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "44.00 %",
        "STR007": "1",
        "STR006": "BELQUI",
        "STR005": "12.12000",
        "STR004": "-12",
        "STR003": "-12.16",
        "STR002": "12.0",
        "STR001": "2"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "66.00 %",
        "STR007": "1",
        "STR006": "ROCMAT",
        "STR005": "13,123,213.01200",
        "STR004": "-13",
        "STR003": "-13.00",
        "STR002": "13.4",
        "STR001": "2"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "100.00 %",
        "STR007": "1",
        "STR006": "MAEOLI",
        "STR005": "1,123,114.49000",
        "STR004": "-14",
        "STR003": "-14.01",
        "STR002": "14.1",
        "STR001": "2"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "1,000.00 %",
        "STR007": "1",
        "STR006": "CARLUC",
        "STR005": "1,235.35999",
        "STR004": "-35",
        "STR003": "-35.02",
        "STR002": "35.0",
        "STR001": "2"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "55.22 %",
        "STR007": "1",
        "STR006": "CASFRA",
        "STR005": "9,955.00000",
        "STR004": "-55",
        "STR003": "-55.03",
        "STR002": "55.0",
        "STR001": "1"
      }
    }, {
      "object": "",
      "readOnly": true,
      "values": {
        "STR008": "20.11 %",
        "STR007": "1",
        "STR006": "DELGIO",
        "STR005": "121.00000",
        "STR004": "-121",
        "STR003": "-121.00",
        "STR002": "121.0",
        "STR001": "1"
      }
    }]
  },
  "key": "i2695"
}`)

const mat = document.querySelector('smeup-mat')

mat.columns = matrix.data.columns
mat.rows = matrix.data.rows

// add event listener for click events
mat.addEventListener('onCellClicked', event => {
  const p = document.querySelector('#label')

  const cj = JSON.stringify(event.detail.c)
  const rj = JSON.stringify(event.detail.r)

  p.innerHTML = `Hai cliccato sulla colonna ${cj} <br /> della riga ${rj}`
})

// BTN
// button list
const btnlist = JSON.parse(`{
      "key": "i456",
      "options": {
        "BTN": {
          "": {
            "enableSort": true
          }
        }
      },
      "data": [{
        "value": "label bottone #1",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-account",
        "children": []
      },{
        "value": "label bottone #2",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #3",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #4",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #5",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #6",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      },{
        "value": "label bottone #7",
        "options (sarebbe il tasto destro)": true,
        "obj": "J1KEY",
        "iconClass": "mdi mdi-plus",
        "children": []
      }],
      "messages": [],
      "actions": {
        "row": [
          {
            "exec": "...",
            "icon": "mdi-clock",
            "text": "Scheda orologio"
          }
        ],
        "global": [],
        "auto (tag action attuale)": [
          "F() / CLOSE / ETC...",
          "F() / CLOSE / ETC...",
          "F() / CLOSE / ETC...",
          "F() / CLOSE / ETC..."
        ],
        "command": [
          {
            "exec": "...",
            "icon": "mdi-play",
            "text": "Spotify"
          }
        ]
      },
      "variables": [],
      "dynamisms": []
    }`)

document.querySelector('ketchup-btn').buttons = btnlist.data

document.querySelector('ketchup-btn').addEventListener('btnClicked', ev => {
  const btnIndex = event.target.dataset.id

  const jsonBtn = JSON.stringify(btnlist.data[btnIndex])

  document.getElementById(
    'btn-label'
  ).innerHTML = `Hai premuto sul pulsante: ${jsonBtn} ed il suo indice e' ${btnIndex}`
})

function toggleBtnFillspace(event) {
  document.querySelector('ketchup-btn').fillspace = event.target.checked
}

function toggleBtnShowtext(event) {
  document.querySelector('ketchup-btn').showtext = event.target.checked
}

function toggleBtnHorizontal(event) {
  document.querySelector('ketchup-btn').horizontal = event.target.checked
}

function toggleBtnShowicon(event) {
  document.querySelector('ketchup-btn').showicon = event.target.checked
}

function toggleBtnRounded(event) {
  document.querySelector('ketchup-btn').rounded = event.target.checked
}

function toggleBtnTextModeHint(event) {
  document.querySelector('ketchup-btn').textmode = event.target.checked
    ? 'Hint'
    : ''
}

function toggleBtnTransparent(event) {
  document.querySelector('ketchup-btn').transparent = event.target.checked
}

function onBorderColorChange(event) {
  document.querySelector('ketchup-btn').borderColor = event.target.value
}

function onBorderButtonClassChange(event) {
  document.querySelector('ketchup-btn').buttonClass = event.target.value
}

function toggleBtnFlat(event) {
  document.querySelector('ketchup-btn').flat = event.target.checked
}

function toggleBtnShowSelection(event) {
  document.querySelector('ketchup-btn').showSelection = event.target.checked
}

function toggleBtnColumns(event) {
  document.querySelector('ketchup-btn').columns = event.target.value
}

// cnd
// countdown
document.querySelector('ketchup-cnd').addEventListener('countdownEnded', () => {
  const label = document.querySelector('#cnd-label')
  console.log(label)
  document.querySelector('#cnd-label').style.display = 'inline-block'
})
