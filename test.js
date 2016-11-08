var test = require('tape')
var aids = require('./')

test('aids text', function (t) {
  t.plan(4)
  t.is(aids('hello world'), 'HeLlO wOrLd', 'aids')
  t.is(aids('hello world', true), 'hElLo WoRlD', 'aids offset')
  t.is(aids('FOO BAR BAZ'), 'FoO bAr BaZ', 'aids against case')
  t.is(aids('FOO BAR BAZ', true), 'fOo BaR bAz', 'aids against case offset')
})
