var m = require('mithril');
var chessground = require('chessground');
var features = require('./features');
var selection = require('./selection');
var score = require('./score');
var timer = require('./timer');

function visualBoard(ctrl) {
  return m('div.lichess_board', m('div.lichess_board_wrap', m('div.lichess_board', [
    chessground.view(ctrl.ground)
  ])));
}

function info(ctrl) {
  return [m('div.explanation', [
    m('p', 'Increase your tactical awareness by spotting all features in a category as fast as you can (regardless of quality of move)'),
    m('br'),
    m('br'),
    m('ul.instructions', [
      m('li.instructions', 'Select your category to begin.'),
      m('li.instructions', 'Click on the correct squares.'),
      m('li.instructions', 'Combo bonus for 3 in 1 second.'),
      m('li.instructions', 'Time extension for every 10 correct.')
    ]),
    m('br'),
    m('br'),
    selection(ctrl),
    m('br'),
    score(ctrl),
    timer(ctrl)
  ])];
}

module.exports = function(ctrl) {
  return [
    m("div.#site_header",
      m('div.board_left', [
        m('h2',
          m('a#site_title', {
              onclick: function() {
                window.open("./index.html?fen=" + encodeURI(ctrl.fen()));
              }
            }, 'feature',
            m('span.extension', 'tron'))),
        features(ctrl)
      ])
    ),
    m('div.#lichess',
      m('div.analyse.cg-512', [
        m('div',
          m('div.lichess_game', [
            visualBoard(ctrl),
            m('div.lichess_ground', info(ctrl))
          ])
        ),
        m('div.underboard', [
          m('div.center', [

            m('br'),
            m('small', 'Data autogenerated from games on ', m("a.external[href='http://lichess.org']", 'lichess.org.')),
            m('small', [
              'Uses libraries ', m("a.external[href='https://github.com/ornicar/chessground']", 'chessground'),
              ' and ', m("a.external[href='https://github.com/jhlywa/chess.js']", 'chessjs.'),
              ' Source code on ', m("a.external[href='https://github.com/tailuge/chess-o-tron']", 'GitHub.')
            ])
          ])
        ])
      ])
    )
  ];
};
