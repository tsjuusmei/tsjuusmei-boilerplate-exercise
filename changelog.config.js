module.exports = {
  disableEmoji: true,
  list: ['chore', 'layout', 'docs', 'func', 'bug', 'perf', 'component', 'release', 'style', 'test'],
  maxMessageLength: 100,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  types: {
    chore: {
      description: 'Build process or auxiliary tool changes',
      emoji: '⌘',
      value: 'chore'
    },
    layout: {
      description: 'Layout related changes',
      emoji: '⬒',
      value: 'layout'
    },
    docs: {
      description: 'Documentation only changes',
      emoji: '□',
      value: 'docs'
    },
    func: {
      description: 'A new feature',
      emoji: '◇',
      value: 'func'
    },
    bug: {
      description: 'A bug fix',
      emoji: '⚠',
      value: 'bug'
    },
    perf: {
      description: 'A code change that improves performance',
      emoji: '↗',
      value: 'perf'
    },
    component: {
      description: 'A code change that adds or modifies a component',
      emoji: '❖',
      value: 'component'
    },
    release: {
      description: 'Create a release commit',
      emoji: '⏏',
      value: 'release'
    },
    style: {
      description: 'Markup, white-space, formatting, missing semi-colons...',
      emoji: '⇥',
      value: 'style'
    },
    test: {
      description: 'Adding missing tests',
      emoji: '💍',
      value: 'test'
    }
  }
}
