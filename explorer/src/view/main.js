var m = require('mithril');
var chessground = require('chessground');
var fenbar = require('./fenbar');
var features = require('./features');

function visualBoard(ctrl) {
  return m('div.lichess_board', m('div.lichess_board_wrap', m('div.lichess_board', [
    chessground.view(ctrl.ground)
  ])));
}

function info(ctrl) {
  return [m('div.explanation', [
    m('p', 'To improve at tactics you first need to improve your vision of the tactical features present in the position.'),
    m('p.author', '- lichess.org streamer'),
    m('br'),
    m('br'),
    m('ul.instructions', [
      m('li.instructions', 'Paste your FEN position below.'),
      m('li.instructions', 'Click on the identified features.'),
      m('li.instructions', 'Copy the URL and share.')
    ]),
    m('br'),
    m('br'),
    m('div.button.newgame', {
      onclick: function() {
        window.open('./quiz.html');
      }
    }, 'Trainer'),
    m('br'),
    m('br'),
    m('div.button.newgame', {
      onclick: function() {
        ctrl.nextFen();
      }
    }, 'Random Position')
  ])];
}
module.exports = function(ctrl) {
  return [
    m("div.#site_header",
      m('div.board_left', [
        m('h2',
          m('a#site_title', 'feature',
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
            fenbar(ctrl),
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
